import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <div className="block col-2">
        <h2>KegList</h2>       
          <hr/>
          <div className="row ">
            {props.kegList.map((keg) =>
              <div className=" col mb-2">
                <div id="card">
                  <Keg
                  whenKegClicked = {props.onKegSelection}
                  name = {keg.name}
                  brand = {keg.brand}
                  flavor = {keg.flavor}
                  price = {keg.price}
                  id = {keg.id}
                  key = {keg.id} />
                </div>
              </div>
            )}
          </div>    
      </div>      
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;


