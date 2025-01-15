import React from "react";
import Phonetics from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
      const phonetic = props.results.phonetics[0]; // Pega o primeiro item (se for o mesmo áudio)
      return (
        <div className="Results">
          <section>
            <h2 className="searching-word">{props.results.word}</h2>
            {phonetic && (
              <div>
                <Phonetics phonetic={phonetic} />
              </div>
            )}
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
  