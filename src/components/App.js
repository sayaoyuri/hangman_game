import { useState } from 'react';

import '../assets/css/reset.css';
import '../assets/css/style.css';

import Letras from "./Letras";
import Jogo from './Jogo';
import Chute from './Chute';

import { alphabet } from './Letras';
import { hangmanList } from './Jogo';

export default function App() {
  const [selectedLetters, setSelectedLetters] = useState(alphabet); // keep track of already guessed letters
  const [wrongGuesses, setWrongGuess] = useState(0);
  const [rightGuesses, setRightGuess] = useState(0);
  const [hangman, setHangman] = useState(hangmanList[wrongGuesses]); // keep track of current hangman image based on the wrong guesses
  const [gameWord, setGameWord] = useState(); // starts the game using _ blank spaces to present
  const [guessedWord, setGuessedWord] = useState(); // displayed as _ on the screen, updated as user right guesses
  const [gameResult, setGameResult] = useState('playing');
  const [guessInput, setGuessInput] = useState('');
  const [guessStatus, setGuessStatus] = useState(true); // keep track of guess whole word input and btn

  return (
    <main>
      <Jogo hangman={hangman} setHangman={setHangman} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} setWrongGuess={setWrongGuess} setRightGuess={setRightGuess} gameWord={gameWord} setGameWord={setGameWord} guessedWord={guessedWord} setGuessedWord={setGuessedWord} gameResult={gameResult} setGameResult={setGameResult} setGuessStatus={setGuessStatus}/>
      <Letras gameWord={gameWord} setGameWord={setGameWord} guessedWord={guessedWord} setGuessedWord={setGuessedWord} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} wrongGuesses={wrongGuesses} setWrongGuess={setWrongGuess} rightGuesses={rightGuesses} setRightGuess={setRightGuess} setGuessStatus={setGuessStatus} setGameResult={setGameResult} setHangman={setHangman}/>
      <Chute gameWord={gameWord} setGuessedWord={setGuessedWord} guessInput={guessInput} setGuessInput={setGuessInput} guessStatus={guessStatus} setGuessStatus={setGuessStatus} setSelectedLetters={setSelectedLetters} setGameResult={setGameResult} />
    </main>
  );
}