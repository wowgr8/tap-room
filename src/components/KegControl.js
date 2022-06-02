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



  render(){
    // conditional rendering
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
    }




    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default KegControl;