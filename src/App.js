// Library Imports
import React from 'react';

// Component Imports
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

import './App.css';

function App() {

  const getLinkedInPreview = (url) => {
    // HERE WE VALIDATE THE URL

    // THEN WE WILL MAKE A FETCH REQUEST TO THE SERVER TO GET THE PREVIEW
  };



  return (
    <div>
      <SearchForm getLinkedInPreview={getLinkedInPreview} />
      <SearchResults />
    </div>
  );
}

export default App;
