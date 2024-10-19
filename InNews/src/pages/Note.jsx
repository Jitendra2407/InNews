import { GiNotebook } from "react-icons/gi"
import styles from './Note.module.css'

const Note = () => {
  return (
    <>
      <div className={`${styles.NotesContainer} mb-8`}>
        <GiNotebook className={styles.NoteIcon}/>
      </div>
    </>
  )
}

export default Note