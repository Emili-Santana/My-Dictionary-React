import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <strong className="Pronunciation-title">Pronunciation </strong>

<div className="audio-line">
     <p> <strong>Audio:</strong></p>
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
        <span className="audio">🔇 <p>(No Audio)</p></span>
      )}
      </div>


<div className="text-line">
<p> <strong>written:</strong></p>
<span className="text"> {props.phonetic.text} </span>
</div>
    </div>
  );
}
