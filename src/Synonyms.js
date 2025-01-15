import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    
    const limitedSynonyms = props.synonyms.slice(0, 3);

    return (
      <div>
        <ul className="Synonyms">
          <strong>Synonyms: </strong>
          {limitedSynonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null; 
  }
}
