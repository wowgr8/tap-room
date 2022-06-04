import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;  // may need to remove deconstructed onClickingEdit then replace line 15 w/ <button onClick={ props.onClickingEdit }>Update Ticket</button>

  return (
    <React.Fragment>
      <h1>Keg Detail </h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.flavor}</h3>
      <h3>{keg.price}</h3>     
      <hr/>
      <button onClick = {() => onClickingEdit(keg.id)}>Update Keg</button> 
      <button onClick = {() => onClickingDelete(keg.id)}>Delete Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;