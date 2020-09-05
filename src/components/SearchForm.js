import React, { useState } from 'react';

function SearchForm({ getLinkedInPreview }){
  // used to store the form input value, and update the state of the input.
  const [searchInputValue, setSearchInputValue] = useState("");

  // changes searchInputValue to hold the value that the user inputs.
  const handleSearchInputChange = (event) => setSearchInputValue(event.target.value);

  // handles the submit event and cleans up the form
  const handleSubmit = (event) => {
    // prevents the form from making a post request and refreshing the page
    event.preventDefault();
    getLinkedInPreview(searchInputValue);
    setSearchInputValue("");
  };


  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="https://www.linkedin.com/in/username" value={searchInputValue}  onChange={handleSearchInputChange}/>
      <button type="submit">See Preview</button>
    </form>
  )
};

export default SearchForm;