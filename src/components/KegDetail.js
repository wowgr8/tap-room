import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="block col-2">
        <h1>Keg Detail </h1>
        <h3>{keg.name}</h3>
        <h3>{keg.brand}</h3>
        <h3>{keg.flavor}</h3>
        <h3>{keg.price}</h3>     
        <hr/>
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