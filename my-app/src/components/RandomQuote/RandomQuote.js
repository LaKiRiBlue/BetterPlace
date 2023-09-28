import React, { useState, useEffect } from 'react';
import './RandomQuote.css';

const RandomQuote = () => {
  const [dailyQuote, setDailyQuote] = useState('');
  
  // Define your API key here
  const apiKey = 'K2AUeGj0uUS/xTSJ9b4oJw==xbriyV8QigXZHu4C'; // Replace with your actual API key

  useEffect(() => {
    // Fetch a random quote from an API (replace with your API or source)
    fetch('https://api.api-ninjas.com/v1/quotes?category=food', {
      headers: {
        'X-API-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the response contains quotes
        if (Array.isArray(data) && data.length > 0) {
          const quoteText = data[0].quote; // Access the quote text
          setDailyQuote(quoteText);
        } else {
          console.error('No quotes found in the API response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  }, [apiKey]); // Include apiKey as a dependency

  return (
    <div className='random-container'>
      <div className="random-quote">
        <h2>Quote of the Day</h2>
        <p>{dailyQuote}</p>
      </div>
    </div>
  );
};

export default RandomQuote;
