const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.NEWS_API_KEY;

app.use(cors());

app.get('/news/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
