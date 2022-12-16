import React from "react";

function Card({ card, handleChoice }) {
  function handleClick() {
    handleChoice(card);
  }

  return (
    <div className="card">
      <div>
        {" "}
        <h1>{card.flotty}</h1>
        <img src={card.src} alt="Avatar" width="100" />
        <img
          src="http://127.0.0.1:5500/src/img/cover.png"
          alt="Avatar"
          width="100"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Card;
