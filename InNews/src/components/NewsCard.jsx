import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
