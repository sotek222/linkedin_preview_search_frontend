// Library Imports
import React, { useState } from 'react';

// Component Imports
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

// Utility Imports
import validateUrl from './util/validator';

// Style Imports
import './App.css';

function App() {
  // The endpoint of the server for requesting linkedin previews
  const API_URL = 'http://localhost:3001/search';
  // used to store the response from the server
  const [searchResult, setSearchResult] = useState(null);

  // used to store the state of loader gif in the searchResult component
  const [isLoading, setIsLoading] = useState(false);

  // stores the state of whether or not the url entered was correct
  const [isUrlValid, setIsUrlValid] = useState(true);

  const getLinkedInPreview = (url) => { 

    // Checks if the url that is inputted meets the 
    // requirements and is valid
    if(validateUrl(url)){
      // cleans up from any previous invalid URL entrys, to reset the display.
      setIsUrlValid(true);
      // begins setting the loader so the spinner gif will display
      setIsLoading(true);

      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({url})
      })
      .then(response => response.json())
      .then(searchResultObject => {
        setSearchResult(searchResultObject);
        setIsLoading(false);
      })
      .catch(err => console.error("THERE WAS AN ERROR: ", err));
    } else {
      // Sets the state of invalid URL so we can show the user that they entered 
      // an invalid URL
      setIsUrlValid(false);
    }
  };

  return (
    <>
      <Header/>
      <div className="main-container">
        <SearchForm getLinkedInPreview={getLinkedInPreview} />
        <SearchResults searchResult={searchResult} isLoading={isLoading} isUrlValid={isUrlValid} />
      </div>
    </>
  );
}

export default App;
