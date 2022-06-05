import React, {useState} from "react";
import PropTypes from "prop-types";
import KegStock from "./KegStock";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  function initialKegQty(){
    return 0
  }
  function initialSellButtonText(){
    return "Sell Pint";
  }
  function initialButtonText(){
    return "Tap New Keg";
  }

  const [kegQty, setKegQty] = useState(() => initialKegQty())
  const [ buttonText, newButtonText] = useState(() => initialButtonText())
  const [sellButtonText, newSellButtonText] = useState(() => initialSellButtonText())

  return (
    <React.Fragment>
      <div className="block col-2">
        <h1>Keg Detail </h1>
        <h3>Name: {keg.name}</h3>
        <h3>Brand: {keg.brand}</h3>
        <h3>Flavor: {keg.flavor}</h3>
        <h3>Price: ${keg.price}</h3>     
        <hr/>
        <KegStock 
          kegQty = {kegQty}
          setKegQty = {setKegQty}
          buttonText = {buttonText}
          newButtonText = {newButtonText}
          sellButtonText = {sellButtonText}
          newSellButtonText = {newSellButtonText} />
        <div className="row">
          <button onClick={ props.onClickingEdit }>Update Ticket</button>
          <button onClick = {() => onClickingDelete(keg.id)}>Delete Keg</button>
        </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;