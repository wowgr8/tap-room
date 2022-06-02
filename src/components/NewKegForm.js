import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

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
      <newkegform className="block col-2">
        <h2>Add New Keg</h2>
        <div className="row">
          <form onSubmit={handleNewKegSubmission}>
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
            <button type='submit'>Add Keg!</button>
          </form>
        </div>
      </newkegform>   
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;