import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div id ="cardNew">
        <div onClick = {() => props.whenKegClicked(props.id)} >
          <h1>{props.name}</h1>
          <hr/>
          <h3>Brand: {props.brand}</h3>
          <h3>Flavor: {props.flavor}</h3>
          <h3>Price per Pint: ${props.price}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;