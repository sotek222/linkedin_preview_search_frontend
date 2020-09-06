import React from 'react';

// Imports the loading spinner gif 
import spinner from '../images/spinner.gif';

/**
 * Displays the results of the search, could be preview info, a loading spinner, or an error message
 * @param {Object} props - the property object passed down from App.js
 * @param {Object} props.searchResult - an object containing the search result data from the API
 * @param {boolean} props.isLoading - a boolean indicating the state of if the coponent data is loading
 * @param {boolean} props.isValidUrl - a boolean indicating the state of if the input url is valid or not
 */
const SearchResults = ({ searchResult, isLoading, isValidUrl }) => {

  /**
   * renders the proper jsx based on the input from props
   */
  const renderSearchResults = () => {
    // render an explanation and error message if the user inputs a bad URL
    if (!isValidUrl){
      return (
        <div className="search-results-container__invalid-url-message">
          The URL you entered was not valid. Please input a valid url.
          <div>(Example: https://www.linkedin.com/in/username)</div>
        </div>
      )
    }

    // render the data pulled from the API
    if(searchResult && !isLoading){
      return (
        <>
          <div className="search-results-container__title" >{searchResult.title}</div>
          <a className="search-results-container__link" href={searchResult.link} target="_blank" rel="noopener noreferrer">See their full profile on Linkedin</a>
          <div className="search-results-container__snippet">
            <p className="search-results-container__snippet-text">{searchResult.snippet}</p>
          </div>
        </>
      );
      // render the loader while we wait for results
    } else if(isLoading && !searchResult) {
      return <img className="search-results-container__loader" src={spinner} alt="loader" />
    } else {
      // default rendering when no data is passed in at all
      return <div className="search-results-container__pre-search-text" >Linkedin Preview will display here...</div>
    }
  };
  
  return <div className="search-results-container">{renderSearchResults()}</div>;
};

export default SearchResults;