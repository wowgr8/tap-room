import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegSubmission(event){
    // function for eventhandler will go here (it's being passed down from control)
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value,
                              brand: event.target.brand.value,
                              flavor: event.target.flavor.value,
                              price: event.target.price.value,
                              id: v4()
                            })
  }

  return (
    <React.Fragment>
      <div className="block col-2">
        <h2>Add New Keg</h2>
        <ReusableForm
          formSubmissionHandler={handleNewKegSubmission}
          buttonText = "Add Keg!" />
      </div>   
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;