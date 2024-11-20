import React, { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Quotes = () => {
  const category = "inspirational";
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const apiKey = "XtbzGaJSJexStaXBfPBZHkbmFZXpws59u09tN3ZB";

  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  // Fetch quotes function
  async function fetchQuotes() {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();

      const fetchedQuote = data[0];
      setQuote({
        text: fetchedQuote.quote,
        author: fetchedQuote.author,
      });
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  // UseEffect to fetch the first quote on component mount
  useEffect(() => {
    fetchQuotes(); // Fetch the first quote when the component mounts
  }, []); // Empty dependency array to run only once

  // Twitter sharing
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex items-center justify-center">
        {/* Main container with fixed width and centered layout */}
        <div className="container w-1/2 max-w-md h-auto p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <p className="text-2xl font-bold text-center my-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text animate-fadeIn">
            Quote of the Day
          </p>

          <div className="quote text-white text-lg text-center overflow-hidden overflow-ellipsis h-auto">
            {quote.text}
          </div>
          <div>
            <div className="line w-full h-[2px] bg-white my-2"></div>
            <div className="bottom flex justify-between items-center mt-4">
              <div className="author text-white text-lg">- {quote.author}</div>
              <div className="icons flex gap-4">
                <IoMdRefresh
                  className="cursor-pointer text-white text-2xl hover:scale-110 transition-transform"
                  onClick={fetchQuotes} // On-click fetches new quotes
                />
                <FaTwitter
                  className="cursor-pointer text-white text-2xl hover:scale-110 transition-transform"
                  onClick={twitter} // Sharing the quote on Twitter
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
