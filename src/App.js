// Library Imports
import React, { useState } from 'react';

// Component Imports
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

// Utility && Service Imports
import validateUrl from './util/validator';
import postLinkedInURL from './services/apiCommunicator';

// Style Imports
import './App.css';


const App = () => {
  // used to store the response from the server
  const [searchResult, setSearchResult] = useState(null);

  // used to store the state of loader gif in the searchResult component
  const [isLoading, setIsLoading] = useState(false);

  // stores the state of whether or not the url entered was correct
  const [isValidUrl, setIsValidUrl] = useState(true);

  /**
   * gets the linkedin preview data or otherwise sets the state of the isValidUrl variable
   * @param {string} url - a string representing a URL inputed from the user
   */
  const getLinkedInPreview = (url) => { 
    // Checks if the url that is inputted meets the 
    // requirements and is valid
    if(validateUrl(url)){
      // cleans up from any previous invalid URL entrys, to reset the display.
      setIsValidUrl(true);
      // begins setting the loader so the spinner gif will display
      setIsLoading(true);

      // makes a POST request to the server with 
      // the users input url inserted into the body
      postLinkedInURL(url)
      .then(searchResultObject => {
        // searchResultObject = {title: "string", link: "string", snippt: "string"}

        // we set the search results to passed down as props to SearchResults component
        setSearchResult(searchResultObject);
        // turn the state of the loader off to remove the loading spinner from the component
        setIsLoading(false);
      })
      .catch(err => console.error("THERE WAS AN ERROR: ", err));
    } else {
      // Sets the state of invalid URL so we can show the user that they entered 
      // an invalid URL
      setIsValidUrl(false);
    }
  };

  return (
    <>
      <Header/>
      <div className="main-container">
        <SearchForm getLinkedInPreview={getLinkedInPreview} />
        <SearchResults searchResult={searchResult} isLoading={isLoading} isValidUrl={isValidUrl} />
      </div>
    </>
  );
}

export default App;
