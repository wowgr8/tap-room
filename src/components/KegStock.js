import React from "react";

function KegStock(props){
  const {kegQty, onAdd} = props;

  return (
    <React.Fragment>
      <p>Card showing pint and keg quantity placeholder</p>
      <h3>will also show two buttons, to add a keg(124pints) and sell a pint</h3>
      <h3>Conditional</h3>
      <div className="row">
        ({kegQty === 0}){
          <h3> 0 : Out of Stock. Please refill keg </h3>
        } else {
          <h3>Pints: {kegQty} </h3>
        }
          <button onClick={ onAdd}>Tap A New Keg</button>
      </div>
    </React.Fragment>
  );
}

export default KegStock;