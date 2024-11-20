import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi"
import CardSlider from "../components/CardSlider"
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import NoteModal from "../components/NoteModal";
import { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import Quotes from "../components/Quotes";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSaveNote = (title, content) => {
    // Here you can handle saving the note to your state or backend.
    console.log("Note saved:", { title, content });
    setIsModalOpen(false); // Close modal after saving
  };

  return (
    <>
      <div className={styles.WeatherContainer}>
        <div className={styles.LeftIcons}>
          <TiWeatherPartlySunny className="cursor-pointer" />
          <IoCalendarNumberOutline className="cursor-pointer" />
        </div>
        <IoSettingsOutline className={`${styles.Setting} cursor-pointer`} />
      </div>

      <Quotes></Quotes>

      <CardSlider></CardSlider>

      {/* Notes */}
      <div className={`${styles.NotesContainer} mb-8 `}>
        <LiaClipboardListSolid
          className={`${styles.ListNote} cursor-pointer`}
          onClick={() => {
            navigate("/notes");
          }}
        />
        <GiNotebook
          className={`${styles.NoteIcon} cursor-pointer`}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Note Modal */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal function
        onSave={handleSaveNote} // Save note function
      />
    </>
  );
}

export default Home;