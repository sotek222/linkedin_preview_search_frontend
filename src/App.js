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


  const getLinkedInPreview = (url) => { 

    if(validateUrl(url)){
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
      // TODO: Show not found error message to user
      console.log("Url yielded no results");
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <SearchForm getLinkedInPreview={getLinkedInPreview} />
        <SearchResults searchResult={searchResult} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
