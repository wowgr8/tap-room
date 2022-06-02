import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Component{

  //Constructor w/state
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
    }
  }


  // Methods for buttons
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render(){
    // conditional rendering
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList />
      buttonText = "Add New Keg";
    }




    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;