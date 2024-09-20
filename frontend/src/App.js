import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('technology');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/news/${category}`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching news', error);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">News Aggregator</h1>
        <p className="text-gray-600 mt-2">Stay updated with the latest news</p>
      </header>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCategory('technology')}
        >
          Technology
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setCategory('sports')}
        >
          Sports
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => setCategory('business')}
        >
          Business
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
