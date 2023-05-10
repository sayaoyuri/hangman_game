import { useState } from 'react';

import '../assets/css/reset.css';
import '../assets/css/style.css';

import forca0 from '../assets/images/forca0.png';
import forca1 from '../assets/images/forca1.png';
import forca2 from '../assets/images/forca2.png';
import forca3 from '../assets/images/forca3.png';
import forca4 from '../assets/images/forca4.png';
import forca5 from '../assets/images/forca5.png';
import forca6 from '../assets/images/forca6.png';

import Letras from "./Letras";
import Jogo from './Jogo';

export default function App() {
  const hangmanList = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  const [hangman, setHangman] = useState(hangmanList[0]);
  const [errorCount, setCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  return (
    <main>
      <Jogo hangman={hangman}/>
      <Letras disabled={isDisabled} setDisabled={setDisabled}/>
    </main>
  );
}