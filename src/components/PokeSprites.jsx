import React from "react";
import propTypes from "prop-types";

const PokeSprites = ({sprites, name}) => {
  const { front_default, front_shiny } = sprites; 
  return (
      <div>
        <img src={front_default} alt={`${name}-default`} />
        <img src={front_shiny} alt={`${name}-shiny`} />
      </div>
    );
};

PokeSprites.propTypes = {
  sprites: propTypes.object.isRequired,
  name: propTypes.string.isRequired
}

export default PokeSprites;
