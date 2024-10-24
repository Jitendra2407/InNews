import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NewsGrid from "../components/NewsGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";

const TheHindu = () => {
  const { name } = useParams(); // Get the selected newspaper name from URL
  const [categories, setCategories] = useState([
    "Politics",
    "Sports",
    "Technology",
    "Entertainment",
    "World",
    "Others"
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Politics");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch news when a category is clicked using fetch
  const fetchNews = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.mediastack.com/v1/news?access_key=500ee9a54d0ace0c4ca2e9dea3e915f2&countries=in`
      );

      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.status}`);
      }

      const data = await response.json();
      setNews(data.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  // Fetch the news when selectedCategory changes
  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar categories={categories} onCategoryClick={setSelectedCategory} />

      {/* Main content area for news */}
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          News from {name} - {selectedCategory}
        </h1>

        {/* Show loading spinner if news is being fetched */}
        {loading ? <LoadingSpinner /> : <NewsGrid articles={news} />}
      </div>
    </div>
  );
};

export default TheHindu;
