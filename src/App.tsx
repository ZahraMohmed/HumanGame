import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList (1).json";
import HangmanWord from "./components/HangmanWord";
import HumanDrawing from "./components/HumanDrawing";
import KeyBoard from "./components/KeyBoard";

function App() {
  function getWord(){
    return words[Math.floor(Math.random() * words.length)];
  }
  const [wodsToGess, setWordessToGess] = useState(getWord());
  console.log(wodsToGess);

  const [GissLetters, setGissLetters] = useState<string[]>([]);
  const incorrectLetters = GissLetters.filter(
    (letter) => !wodsToGess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wodsToGess
    .split("")
    .every((letter) => GissLetters.includes(letter));
  const addGussLetter = useCallback(
    (letter: string) => {
      if (GissLetters.includes(letter) || isLoser || isWinner) return;
      setGissLetters((currentGissLetter) => [...currentGissLetter, letter]);
    },
    [GissLetters, isLoser , isWinner]
  );

  useEffect(() => {
    const handeler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGussLetter(key);
    };
    document.addEventListener("keypress", handeler);
    return () => {
      document.removeEventListener("keypress", handeler);
    };
  }, [GissLetters]);

  useEffect(()=>{
    const handeler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key!=="Enter") return;
      e.preventDefault();
      setWordessToGess(getWord())
    };
    document.addEventListener("keypress", handeler);
    return () => {
      document.removeEventListener("keypress", handeler);
    };
  },[])
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {" "}
          {isWinner && "winner! - Refresh To Try Agin"}{" "}
          {isLoser && "You Are Loser Try Agin"}{" "}
        </div>

        <HumanDrawing incorrectLetters={incorrectLetters.length} />
        <HangmanWord LoserRedT={isLoser  } wodsToGess={wodsToGess} GissLetters={GissLetters} />
        <div style={{ alignSelf: "stretch" }}>
          <KeyBoard
           disable = {isLoser || isWinner}
            inactiveLetter={incorrectLetters}
            activeLitter={GissLetters.filter((litter) =>
              wodsToGess.includes(litter)
            )}
            addGussLetter={addGussLetter}
          />
        </div>
      </div>
    </>
  );
}

export default App;
