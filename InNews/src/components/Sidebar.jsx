import React from "react";

const Sidebar = ({ categories, onCategoryClick }) => {
  return (
    <div className="w-64 h-full bg-gray-800 p-4">
      <h2 className="text-white text-2xl mb-6">Categories</h2>
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-white cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
