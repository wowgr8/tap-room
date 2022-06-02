import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <keglist className="block col-2">
        <h2>KegList Placeholder</h2>
        
          <hr/>
          {props.kegList.map((keg, index) =>
            <div className="row">
            <Keg
              name = {keg.name}
              brand = {keg.brand}
              flavor = {keg.flavor}
              price = {keg.price}
              key = {index} />
              </div> 
            )}    
      </keglist>      
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;