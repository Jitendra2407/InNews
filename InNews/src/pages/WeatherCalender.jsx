import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import styles from "./WeatherCalender.module.css";

const WeatherCalender = () => {
  return (
    <>
      <div className={styles.WeatherContainer}>
        <div className={styles.LeftIcons}>
          <TiWeatherPartlySunny />
          <IoCalendarNumberOutline />
        </div>
        <IoSettingsOutline className={styles.Setting} />
      </div>
    </>
  )
}

export default WeatherCalender;