import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
