import { useState } from "react";
import styles from "./Quotes.module.css";

const Quotes = () => {
  // Your API key
  const apiKey = "5GG7kilwodUpFI9MS3MIA==D9MyIesgVzxnEaXQ";

  // Define the API endpoint
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

  // Make the request using fetch and include the API key in the headers
  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((quotes) => {
      // Loop through and display the quotes
      quotes.forEach((quote) => {
        console.log(`${quote.quote} - ${quote.author}`);
      });
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });

  return (
    <>
      <div className={styles.QuotesContainer}>
        <div className={styles.Head}>
          <h1>Quote of The Day</h1>
        </div>
        <div className={styles.Quote}>
          <p>
            "Being a winner is a curse, it doesn't matter how much you have won
            before, you are not winner until you win again..."
          </p>
        </div>
      </div>
    </>
  );
};

export default Quotes;
