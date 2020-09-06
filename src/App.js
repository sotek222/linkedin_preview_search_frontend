// Library Imports
import React, { useState } from 'react';

// Component Imports
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

// Utility Imports
import validateUrl from './util/validator';


import './App.css';



function App() {
  // The endpoint of the server for requesting linkedin previews
  const API_URL = 'http://localhost:3001/search';
  // used to store the response from the server
  const [searchResult, setSearchResult] = useState(null);


  const getLinkedInPreview = (url) => {
    console.log(`${url} is `, validateUrl(url) ? 'valid' : 'invalid');

    if(validateUrl(url)){
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({url})
      })
      .then(response => response.json())
      .then(searchResultObject => setSearchResult(searchResultObject))
      .catch(err => console.error("THERE WAS AN ERROR: ", err));
    } else {
      // TODO: Show not found error message to user
      console.log("Url yielded no results");
    }
  };



  return (
    <div>
      <SearchForm getLinkedInPreview={getLinkedInPreview} />
      <SearchResults searchResult={searchResult} />
    </div>
  );
}

export default App;
