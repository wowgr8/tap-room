import React from "react";

function KegStock(props){
  const {kegQty, setKegQty, buttonText, newbuttonText} = props;

  const onAdd = () => {    
    if(kegQty !== 0){
      setKegQty(prevKegQty => prevKegQty + 124);
      newbuttonText(prevButtonText => prevButtonText.replace("Tap Another Keg"));
      return buttonText
    } else if(kegQty === 0){
      console.log("No Stock")
      newbuttonText(prevButtonText => prevButtonText.replace("Out of Stock - Pls Refill"));
      setKegQty(prevKegQty => prevKegQty + 124);
    }
  }


    // playing with display messages in conditional
  // const onAdd = () => {
  //   let message = "";
  //   if(kegQty !== 0){
  //     setKegQty(prevKegQty => prevKegQty + 124);
  //     let message = "Pints: " + kegQty;
  //     return message,
  //     console.log("Pints" + kegQty),
  //     console.log(message)
  //   } else if(kegQty === 0){
  //     console.log("No Stock")
  //     let message = <p>Out of Stock.</p>;
  //     return message,
  //     // console.log(kegQty, kegQty),
  //     setKegQty(prevKegQty => prevKegQty + 124);
  //   }
  // }

  return (
    <React.Fragment>
      <p>Card showing pint and keg quantity placeholder</p>
      <h3>will also show two buttons, to add a keg(124pints) and sell a pint</h3>
      <h3>Conditional</h3>
      <div className="row">
          <p>stock: {kegQty} pints</p>
          <button onClick={ onAdd}>{buttonText}</button>
      </div>
    </React.Fragment>
  );
}

export default KegStock;