import { alphabet } from "./Letras";

export default function Chute(props) {
  const {gameWord, setGuessedWord, guessInput, setGuessInput, setSelectedLetters, setGameResult} = props;

  function guess() {
    let result;
    if(gameWord) {
      result  = gameWord === guessInput.toLowerCase() ? 'won' : 'lost';
    }
    
    setSelectedLetters( [...alphabet] );
    setGuessedWord(gameWord);
    setGameResult(result);
  }

  return (
    <div className="guess-container">
      <label htmlFor="guess">Já sei a palavra!</label>
      <input onChange={(ev) => setGuessInput(ev.target.value)} type="text" id="guess" value={guessInput} />
      <button onClick={guess} id="guessBtn">Chutar</button>
    </div>
  );
}