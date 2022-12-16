import "./App.css";
import Card from "./Components/Card";
import { useEffect, useState } from "react";

const cardimgs = [
  {
    src: "http://127.0.0.1:5500/src/img/helmet-1.png",
    matched: false,
  },
  {
    src: "http://127.0.0.1:5500/src/img/potion-1.png",
    matched: false,
  },
  {
    src: "http://127.0.0.1:5500/src/img/ring-1.png",
    matched: false,
  },
  {
    src: "http://127.0.0.1:5500/src/img/scroll-1.png",
    matched: false,
  },
  {
    src: "http://127.0.0.1:5500/src/img/shield-1.png",
    matched: false,
  },
  {
    src: "http://127.0.0.1:5500/src/img/sword-1.png",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  //shuffle
  function shuffle() {
    const shufflecard = [...cardimgs, ...cardimgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shufflecard);
    setTurns(0);
  }
  //getting choices
  function handleChoice(card) {
    one ? setTwo(card) : setOne(card);
  }
  //comparing
  useEffect(() => {
    if (one && two) {
      if (one.src === two.src) {
        console.log("match");
        reset();
      } else {
        console.log("not match");
        reset();
      }
    }
  }, [one, two]);

  //reset
  function reset() {
    setOne(null);
    setTwo(null);
    setTurns((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffle}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
