/* eslint-disable react/prop-types */

import "./pokemon_card.css";

export default function PokemonCard({ id, name, image, onClick }) {
  return (
    <div onClick={onClick}>
      <img
        key={id}
        className="card"
        src={image}
        alt={name}
      />
    </div>
  );
}
