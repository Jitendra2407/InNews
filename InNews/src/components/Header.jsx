import styles from "./Header.module.css";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";


function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const {isLoggedIn} = useAuth();

  return (
    <>
      <div className={`${styles.headerContainer} bg-custom-dark-blue`}>
        <NavLink to="/">
          <RiHomeSmileFill className={styles.homeIcon} />
        </NavLink>
        {/* <div className={`${styles.searchContainer} w-64`}>
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
        </div> */}
        <div className={styles.Logo}>
          <h1 className={styles.Logo_Head}>inNews</h1>
        </div>
        {/* <IoLogoGameControllerA className={styles.GameIcons} /> */}
        {/* <FaLanguage className={styles.LanguageIcons} /> */}

        {isLoggedIn ? (
          <NavLink to="/logout" className="no-underline mr-6">
            <button
              type="button"
              className={`${styles.myStyBtn} rounded-md btn`}
            >
              Logout
            </button>
          </NavLink>
        ) : (
          <>
            <NavLink to="/register" className="no-underline mr-6">
              <button
                type="button"
                className={`${styles.myStyBtn} rounded-md btn`}
              >
                Register
              </button>
            </NavLink>
            <NavLink to="/login" className="no-underline">
              <button
                type="button"
                className={`${styles.myStyBtn} rounded-md btn`}
              >
                LogIn
              </button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}

export default Header;