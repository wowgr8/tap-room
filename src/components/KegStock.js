import React from "react";

function KegStock(props){
  return (
    <React.Fragment>
      <p>Card showing pint and keg quantity placeholder</p>
      <h3>will also show two buttons, to add a keg(124pints) and sell a pint</h3>
      <h3>Conditional</h3>
      <div className="row">
          {/* <button onClick={ props.onClickingEdit }>Refill Keg</button> */}
          {/* <button onClick = {() => onClickingDelete(keg.id)}>Sell Pint</button> */}
      </div>
    </React.Fragment>
  );
}

export default KegStock;