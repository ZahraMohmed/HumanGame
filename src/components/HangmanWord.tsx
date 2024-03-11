type HumanWordProps ={
  wodsToGess:string
  GissLetters:string[] 
  LoserRedT?:boolean 
}

function HangmanWord({GissLetters, wodsToGess ,LoserRedT= false}:HumanWordProps) {

  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wodsToGess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "0.1em solid black" }}>
          <span style={{visibility:GissLetters.includes(letter)|| LoserRedT? "visible":"hidden",
                        color:!GissLetters.includes(letter)|| LoserRedT? "red":"black"
        }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
