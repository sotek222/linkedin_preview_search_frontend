// The endpoint of the server for requesting linkedin previews
const API_URL = 'http://localhost:3001/search';

/**
  * gets the linkedin preview data and parses it as JSON
  * @param {string} url - a string representing a URL inputed from the user
  */
function postLinkedInURL(url){
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ url })
  })
  .then(response => response.json())  
};

export default postLinkedInURL;