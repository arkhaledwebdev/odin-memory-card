/* eslint-disable react/prop-types */

import "./pokemon_card.css";

export default function PokemonCard({ id, name, image, handleClick }) {
  return (
    <div>
      <img
        key={id}
        className="card"
        src={image}
        alt={name}
        onClick={handleClick}
      />
    </div>
  );
}
