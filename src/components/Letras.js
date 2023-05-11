import { hangmanList } from "./App";
export const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras (props) {
  let {selectedLetters, setSelectedLetters, errorCount, setCount, setHangman} = props;

  function selectLetter(ev) {
    ev.preventDefault();

    const letter = ev.target.value;
    setSelectedLetters([...selectedLetters, letter]);
  }

  return (
    <div className="letters-container">
      {alphabet.map(letter => <button disabled={selectedLetters.includes(letter[0].toLowerCase()) ? true : false} onClick={selectLetter} key={letter} value={letter} > {letter.toUpperCase()} </button>)}
    </div>
  );
}