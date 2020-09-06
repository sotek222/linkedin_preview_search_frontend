import React from 'react';

import spinner from '../images/spinner.gif';


function SearchResults({ searchResult, isLoading }){

  const renderSearchResults = () => {
    if(searchResult && !isLoading){
      return (
        <>
          <div>{searchResult.title}</div>
          <a href={searchResult.link}>link</a>
          <div><p>{searchResult.snippet}</p></div>
        </>
      );
    } else if(isLoading && !searchResult) {
      return <img src={spinner} alt="loader" />
    } else {
      return <div>Search Results will go here</div>
    }
  };
  
  return <div className="search-results-container">{renderSearchResults()}</div>;
};

export default SearchResults;