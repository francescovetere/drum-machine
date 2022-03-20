import React, { useEffect, useState } from "react";
import "./App.scss";

export default function App() {
  const [displayName, setDisplayName] = useState("---");

  useEffect(() => {
    function triggerAudioFromKeyboard(event: KeyboardEvent): void {
      const key = event.key.toLocaleLowerCase();

      if (
        key === "q" ||
        key === "w" ||
        key === "e" ||
        key === "a" ||
        key === "s" ||
        key === "d" ||
        key === "z" ||
        key === "x" ||
        key === "c"
      )
        play(event.key.toUpperCase());
    }

    document.addEventListener("keydown", triggerAudioFromKeyboard);

    return () => {
      document.removeEventListener("keydown", triggerAudioFromKeyboard);
    };
  }, []);

  function play(audioId: string) {
    const audioElement = document.querySelector(`#${audioId}`) as HTMLAudioElement;
    audioElement.currentTime = 0;
    audioElement.play();

    setDisplayName(audioId);
  }

  return (
    <>
      <div id="drum-machine">
        <p id="display">{displayName}</p>
        <div id="drum-pads">
          <button className="drum-pad" id="drum-pad-audio1" onClick={() => play("Q")}>
            Q
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio2" onClick={() => play("W")}>
            W
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio3" onClick={() => play("E")}>
            E
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio4" onClick={() => play("A")}>
            A
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio5" onClick={() => play("S")}>
            S
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio6" onClick={() => play("D")}>
            D
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio7" onClick={() => play("Z")}>
            Z
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio8" onClick={() => play("X")}>
            X
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
          </button>
          <button className="drum-pad" id="drum-pad-audio9" onClick={() => play("C")}>
            C
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
          </button>
        </div>
      </div>
    </>
  );
}
