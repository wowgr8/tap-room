import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <keglist className="block col-2">
        <h2>KegList</h2>
        
          <hr/>
          {props.kegList.map((keg) =>
            <div className="row">
            <Keg
              whenKegClicked = {props.onKegSelection}
              name = {keg.name}
              brand = {keg.brand}
              flavor = {keg.flavor}
              price = {keg.price}
              id = {keg.id}
              key = {keg.id} />
              </div> 
            )}    
      </keglist>      
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;