const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabet = letters.map(letter => letter[0].toUpperCase());

export default function Letras (props) {

  const {isDisabled, setDisabled} = props;

  return (
    <div className="letters-container">
      {alphabet.map(letter => <button key={letter} value={letter} disabled={isDisabled} >{letter}</button>)}
    </div>
  );
}