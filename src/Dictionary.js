import React, {useState} from "react";
import './Dictionary.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dictionary() {
    let [keyword, setkeyword] = useState(" ")
  function search(event) {
    event.preventDefault(); 
    alert(`Searching for ->${keyword} definition`);
  }
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
