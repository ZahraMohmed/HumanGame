import styles from "./keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type keyPordesProps = {
  inactiveLetter: string[];
  activeLitter: string[];
  addGussLetter: (key: string) => void;
  disable?: boolean
};
function KeyBoard({
  inactiveLetter,
  activeLitter,
  addGussLetter,
  disable = false
}: keyPordesProps) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
          gap: "0.5rem",
        }}
      >
        {KEYS.map((key, index) => {
          const active = activeLitter.includes(key);
          const inactive = inactiveLetter.includes(key);
          return (
            <>
              <button
                disabled={active || inactive||disable}
                className={`${styles.btn} ${active ? styles.active : " "} ${
                  inactive ? styles.inactive : " "
                }  `}
                onClick={() => {
                  addGussLetter(key);
                }}
                key={index}
              >
                {key}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default KeyBoard;
