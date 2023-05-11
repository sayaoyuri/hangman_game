export default function Jogo (props) {
  const {hangman, setHangman, selectedLetters, setSelectedLetters, setCount} = props;

  function startGame() {
    setSelectedLetters([]);
    setCount(0);
  }

  return (
    <div className="game">
      <img src={hangman} alt="" />
      <div>
        <button onClick={startGame}>Escolher Palavra</button>
        <p id="word">_ _ _ _ _ _ _ _ _ _ _ _</p>
      </div>
    </div>
  );
}