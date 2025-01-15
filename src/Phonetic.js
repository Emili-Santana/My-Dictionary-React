import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <strong className="Pronunciation-title">Pronunciation: </strong>

     

      {props.phonetic.audio ? (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="audio"
        >
    🔊  
        </a>
      ) : (
        <span className="audio">No audio available</span>
      )}

<span className="text"> {props.phonetic.text} </span>
    </div>
  );
}
