export default function Jogo (props) {

  const {hangman, setHangman} = props;

  return (
    <div className="game">
      <img src={hangman} alt="" />
      <div>
        <button>Escolher Palavra</button>
        <p id="word">_ _ _ _ _ _ _ _ _ _ _ _</p>
      </div>
    </div>
  );
}