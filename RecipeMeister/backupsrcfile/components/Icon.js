// Icon Component
import React, { useState } from "react";
// Load Images
import Poultry from "./icons/poultry.png";
import Vegetarian from "./icons/vegetarian.png";
import Vegan from "./icons/vegan.png";
import Meat from "./icons/meat.png";
import Seafood from "./icons/seafood.png";
import PropTypes from "prop-types";

const Icon = ({ type }) => {
  const icons = { Poultry, Meat, Seafood, Vegetarian, Vegan };

  console.log(icons);
  console.log("Dishtype", type);

  return (
    <>
      <div className="images">
        <img src={icons[type]} alt={type} />
        <h3>{type}</h3>
      </div>
    </>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
