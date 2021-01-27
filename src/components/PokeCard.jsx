import React from "react";
import propTypes from "prop-types";
import PokeSprites from "./PokeSprites"

const PokeCard = ({pokemonData}) => {
  let { name, sprites, video } = pokemonData;
  return (
    <div>
      <h1>{name}</h1>
      <PokeSprites sprites={sprites} name={name}/>
      <div>
        <a href={video} target="_blank" rel="noopener noreferrer">
          Ver video
        </a>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  pokemonData: propTypes.object.isRequired
}

export default PokeCard;
