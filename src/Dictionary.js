import React, { useState } from "react";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setresults] = useState(null);
  let[loaded,setLoaded] = useState(false);


  //Call Api answer
  function handleResponse(response) {
    setresults(response.data[0]);
    setLoaded (true);
  }

//Call when the form is submitted
  function search(event) {
   if  (event) event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  //Change the word
  function handleKeyChange(event) {
    setkeyword(event.target.value);
  }

  // treat the submitted form
  function handleSubmit (event){
    event.preventDefault();
    search();
      }
// make the initial searching when the form is submitted
      if (!loaded && !results) {
        search(); 
      }

  if (loaded && results){
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="form-search mt-3 mb-3 fs-3">
          What word do you want to look up?
        </label>
        <input
          type="search"
          className="form-control w-25 mx-auto"
          placeholder="Type the word"
          onChange={handleKeyChange}
        />
      </form>

      <p>Ex.: paris, wine, yoga, coding</p>

      <Results results={results} />
    </div>
  );
 } else {
  return <p>Loading</p>;
 }
 

 }


