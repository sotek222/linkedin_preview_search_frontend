import React, { useState } from 'react';

/**
 * renders the search form 
 * @param {Object} props - A property object passed down from App.js
 * @param {function} props.getLinkedInPreview - A function for handling user input after clicking submit
 */
const SearchForm = ({ getLinkedInPreview }) => {
  // used to store the form input value, and update the state of the input.
  const [searchInputValue, setSearchInputValue] = useState("");

  // changes searchInputValue to hold the value that the user inputs.
  /**
   * updates state so the input is controlled programmatically 
   * @param {Object} event - An object that contains data about what the user inputed  
   */
  const handleSearchInputChange = (event) => setSearchInputValue(event.target.value);

  /**
   * handles the submit event and cleans up the form
   * @param {Object} event - An object that is used to override the default submit behavior
   */
  const handleSubmit = (event) => {
    // prevents the form from making a post request and refreshing the page
    event.preventDefault();
    getLinkedInPreview(searchInputValue);
    // clear the form for future input
    setSearchInputValue("");
  };


  return (
    <form className="search-form" onSubmit={handleSubmit} >
      <input className="search-form__input" type="text" placeholder="https://www.linkedin.com/in/username" value={searchInputValue}  onChange={handleSearchInputChange}/>
      <button className="search-form__button" type="submit">See Preview</button>
    </form>
  )
};

export default SearchForm;