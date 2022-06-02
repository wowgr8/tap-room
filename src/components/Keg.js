import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <hr/>
      <h3>{props.brand}</h3>
      <h3>{props.flavor}</h3>
      <h3>{props.price}</h3>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number
}

export default Keg;