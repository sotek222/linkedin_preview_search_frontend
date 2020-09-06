import React from 'react';

function SearchResults({ searchResult }){

  const renderSearchResults = () => {
    if(searchResult){
      return (
        <div>
          <div>{searchResult.title}</div>
          <a href={searchResult.link}>link</a>
          <div><p>{searchResult.snippet}</p></div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
  
  
  return renderSearchResults();
};

export default SearchResults;