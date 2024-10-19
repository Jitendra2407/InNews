import { FaLanguage } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import styles from "./LeftPartHead.module.css"

const LeftPartHead = () => {
  return (
    <>
      <IoLogoGameControllerA className={styles.GameIcons}/>
      <FaLanguage className={styles.LanguageIcons}/>
      <button type="button" className={`btn ${styles.myStyBtn}`}>SignIn</button>
    </>
  )
}

export default LeftPartHead;