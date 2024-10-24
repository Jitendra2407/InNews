import React from "react";
import NewsCard from "./NewsCard";

const NewsGrid = ({ articles }) => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;
