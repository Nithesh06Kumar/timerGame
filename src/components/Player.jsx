import { useRef, useState } from "react";

export default function Player() {
  const inputRef = useRef(null);
  const [playerName, setPlayerName] = useState("unknown entity");
  const handleSetName = () => {
    console.log("Input", inputRef.current);
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
