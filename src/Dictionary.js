import React, {useState} from "react";
import './Dictionary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Results from './Results';

export default function Dictionary() {
    let [keyword, setkeyword] = useState("");
    let [results, setresults] = useState(null);

    function handleResponse(response){
      setresults(response.data[0]);
    }
    
  function search(event) {
    event.preventDefault(); 
  

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  axios.get(apiUrl).then(handleResponse)
}

 function handleKeyChange (event){
    setkeyword(event.target.value);


 }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label htmlFor="searchInput" className="form-search mt-3 mb-3 fs-3" >What word do you want to look up?</label>
        <input 
          type="search" 
          className="form-control w-25 mx-auto" 
          placeholder="Type the word"
          onChange={handleKeyChange}
        />
      
      </form>

      <p>
      Ex.: paris, wine, yoga, coding
      </p>

      <Results results={results}/>
    </div>
  );
}
