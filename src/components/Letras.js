import { hangmanList } from "./Jogo";

export const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras (props) {
  const {selectedLetters, setSelectedLetters, gameWord, guessedWord, setGuessedWord, wrongGuesses, setWrongGuess, rightGuesses, setRightGuess, setGameResult, setHangman} = props;

  function selectLetter (ev) {
    const letter = ev.target.value;
    let newSelectedLetters = [...selectedLetters, letter]; // includes the ev triggered letter to local selectedLetters arr
    
    const gameWordArray = [];
    gameWordArray.push(...gameWord);  // copies the next 3 states to manipulate locally on this func

    let newGuessedWord = [...guessedWord];
    let wrongCount = wrongGuesses;
    let rightCount = rightGuesses;
    let newGameResult = 'playing'; // initialized as null, cause will be updated if given condition
    
    if(!gameWordArray.includes(letter)) { // wrong guess validation
      wrongCount++;
        if(wrongCount === 6) { // fully hanged validation
          newSelectedLetters = [...alphabet];
          newGuessedWord = [...gameWordArray];
          newGameResult = 'lost';
        }
      } else {
          for (let i = 0; i < gameWordArray.length; i++) {
            if(letter === gameWordArray[i]) { // validate each correctly guessed character
              newGuessedWord[i] = letter;
              rightCount ++;
              
              if(rightCount === gameWordArray.length) { // victory validation
                newSelectedLetters = [...alphabet];
                newGameResult = 'won';
              }
            } 
          }
        }
      
      setSelectedLetters(newSelectedLetters);
      setHangman( hangmanList[wrongCount] );
      setWrongGuess(wrongCount);
      setRightGuess(rightCount);
      setGuessedWord(newGuessedWord);
      setGameResult(newGameResult);
    }
      
  return (
    <div className="letters-container">
      {alphabet.map(letter => <button disabled={selectedLetters.includes(letter) ? true : false} onClick={selectLetter} key={letter} value={letter} data-test='letter'> {letter.toUpperCase()} </button>)}
    </div>
  );
}