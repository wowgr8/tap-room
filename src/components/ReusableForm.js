import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form className="block col-2" onSubmit = {props.formSubmissionHandler}>
        <div className="row">
            <input
              type='text'
              name='name'
              placeholder='Kombucha Name' />
            <input
              type='text'
              name='brand'
              placeholder='Kombucha brand' />
            <input
              type='text'
              name='flavor'
              placeholder='Kombucha flavor' />
            <input
              type='number'
              name='price'
              placeholder='Kombucha price' />
            <button type='submit'>{props.buttonText}</button>
        </div>
      </form> 
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;