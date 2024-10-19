import styles from "./Quotes.module.css"

const Quotes = () => {
  return (
    <>
      <div className={styles.QuotesContainer}>
        <div className={styles.Head}>
          <h1>Quote of The Day</h1>
        </div>
        <div className={styles.Quote}>
          <p>"Being a winner is a curse, it doesn't matter how much you have won before, 
            you are not winner until you win again..."
          </p>
        </div>
      </div>
    </>
  )
}

export default Quotes;