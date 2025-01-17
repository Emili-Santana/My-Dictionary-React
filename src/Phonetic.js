import React, { useState } from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const [isPlaying, setIsPlaying] = useState(false); // Para controlar o estado de reprodução
  const [audio] = useState(new Audio(props.phonetic.audio)); // Criar uma instância do áudio

  // Função para alternar o estado de reprodução
  function handleAudioPlay() {
    if (props.phonetic.audio) { // Verifica se o áudio está disponível
      if (isPlaying) {
        audio.pause(); // Pausa o áudio se estiver tocando
      } else {
        audio.play(); // Toca o áudio
      }
      setIsPlaying(!isPlaying); // Alterna o estado de reprodução
    }
  }

  // Função chamada quando o áudio termina
  audio.onended = () => setIsPlaying(false);

  return (
    <div className="Phonetic">
      <strong className="Pronunciation-title">Pronunciation</strong>

      <div className="audio-line">
        <p>
          <strong>Audio:</strong>
        </p>
        {props.phonetic.audio ? (
          <div>
            <button className="audio-button" onClick={handleAudioPlay}>
              🔊 {isPlaying ? "" : ""} 
            </button>
          </div>
        ) : (
          <span className="audio">🔇 <p>(No audio available)</p></span>
        )}
      </div>

      <div className="text-line">
        <p>
          <strong>written:</strong>
        </p>
        <span className="text">{props.phonetic.text}</span>
      </div>
    </div>
  );
}
