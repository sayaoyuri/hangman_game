import { useState } from 'react';

import '../assets/css/reset.css';
import '../assets/css/style.css';

import Letras from "./Letras";

export default function App() {
  const [isDisabled, setDisabled] = useState(false);

  return (
    <main>
      <Letras disabled={isDisabled} setDisabled={setDisabled}/>
    </main>
  );
}