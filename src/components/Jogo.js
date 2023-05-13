import palavras from "../palavras";

import forca0 from '../assets/images/forca0.png';
import forca1 from '../assets/images/forca1.png';
import forca2 from '../assets/images/forca2.png';
import forca3 from '../assets/images/forca3.png';
import forca4 from '../assets/images/forca4.png';
import forca5 from '../assets/images/forca5.png';
import forca6 from '../assets/images/forca6.png';

export const hangmanList = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo (props) {
  const {hangman, setHangman, gameResult, setGameResult, setSelectedLetters, setWrongGuess, setRightGuess, setGameWord, guessedWord, setGuessedWord} = props;

  function startGame() { // sets all the states to a 'default'/new 
    const startValue = 0;
    setSelectedLetters( [] );
    setWrongGuess( startValue );
    setRightGuess( startValue );
    setHangman( hangmanList[startValue] );
    setGameResult('playing');

    const randomWord = palavras[ (Math.round(Math.random(palavras.length) * 100)) ]; // get random word from word list
    setGameWord(randomWord);

    const newGuessedWord = [];
    for (let i = 0; i < randomWord.length; i++) {
      newGuessedWord.push( '_' );
    }
    setGuessedWord(newGuessedWord);
  }

  return (
    <div className="game">
      <img src={hangman} alt="hangman" data-test="game-image"/>
      <div>
        <button onClick={startGame} data-test="choose-word">Escolher Palavra</button>
        <p id="word" className={gameResult} data-test="word">{guessedWord}</p>
      </div>
    </div>
  );
}