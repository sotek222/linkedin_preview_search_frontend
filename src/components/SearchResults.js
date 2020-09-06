import React from 'react';

import spinner from '../images/spinner.gif';


function SearchResults({ searchResult, isLoading, isUrlValid }){

  const renderSearchResults = () => {
    if(!isUrlValid){
      return (
        <div>
          The URL you entered was not valid. Please re-enter a valid url.
        </div>
      )
    }

    if(searchResult && !isLoading){
      return (
        <>
          <div className="search-results-container__title" >{searchResult.title}</div>
          <a className="search-results-container__link" href={searchResult.link}>See their full profile on Linkedin</a>
          <div className="search-results-container__snippet">
            <p className="search-results-container__snippet-text">{searchResult.snippet}</p>
          </div>
        </>
      );
    } else if(isLoading && !searchResult) {
      return <img className="search-results-container__loader" src={spinner} alt="loader" />
    } else {
      return <div className="search-results-container__pre-search-text" >Linkedin Preview will display here...</div>
    }
  };
  
  return <div className="search-results-container">{renderSearchResults()}</div>;
};

export default SearchResults;