import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value,
                    brand: event.target.brand.value,
                    flavor: event.target.flavor.value,
                    price: event.target.price.value,
                    id: keg.id});
  }

  return (
    <React.Fragment>
      <h1>Edit Keg</h1>
      <ReusableForm
        formSubmissionHandler = {handleEditKegFormSubmission}
        buttonText = "Update Keg"  />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;