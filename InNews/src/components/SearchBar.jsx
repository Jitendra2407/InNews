import React, { useState } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import styles from "./SearchBar.module.css"; 

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.input}
      />
      {searchTerm && (
        <IoMdClose className={styles.clearIcon} onClick={clearSearch} />
      )}
    </div>
  );
}

export default SearchBar;
