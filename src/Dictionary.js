import React, {useState} from "react";
import './Dictionary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Dictionary() {
    let [keyword, setkeyword] = useState(" ");

    function handleResponse(response){
      console.log(response.data[0]);
    }
  function search(event) {
    event.preventDefault(); 
  
  }
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US${keyword}`
  axios.get(apiUrl).then(handleResponse)
console.log(apiUrl)

 function handleKeyChange (event){
    setkeyword(event.target.value);


 }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label htmlFor="searchInput" className="form-search mt-3 mb-3" >Search for a word:</label>
        <input 
          type="search" 
          className="form-control w-25 mx-auto" 
          placeholder="Type the word"
          onChange={handleKeyChange}
        />
        <button 
          type="submit" 
          className="btn mt-3" 
          style={{ backgroundColor: '#04a29f', color: '#ffffff' }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
