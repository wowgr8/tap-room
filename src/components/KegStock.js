import React from "react";

function KegStock(props){
  const {kegQty, setKegQty, buttonText, newButtonText, sellButtonText, newSellButtonText} = props;

  const onAdd = () => {    
    if(kegQty >= 0){
      setKegQty(prevKegQty => prevKegQty + 124);
      newButtonText("Tap Another Keg");
      newSellButtonText("Sell Pint");
    } 
  }

  const onSell = () => {    
    if(kegQty >= 1){
      setKegQty(prevKegQty => prevKegQty - 1);
      newSellButtonText("Sell Pint");
    } else {
      newSellButtonText("Out of Stock.");
    }
  }

  return (
    <React.Fragment>
      <div id ="card">
        <p>stock: {kegQty} pints</p>
      </div>
      <div className="row">          
          <button className="refill" onClick={ onAdd}>{buttonText}</button>
          <button className="sell" onClick={ onSell}>{sellButtonText}</button>
      </div>
    </React.Fragment>
  );
}

export default KegStock;