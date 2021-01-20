import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";

const PokeCard = () => {
  let { name, sprites, video } = mockPokemonData;
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <img src={sprites.front_default} alt={`${name}-default`} />
        <img src={sprites.front_shiny} alt={`${name}-shiny`} />
      </div>
      <div>
        <a href={video} target="_blank" rel="noreferrer">
          Ver video
        </a>
      </div>
    </div>
  );
};

export default PokeCard;
