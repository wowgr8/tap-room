import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component{

  //Constructor w/state
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    };
  }


  // Methods for buttons
  handleClick = () => {  
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false});
  }

  // This method will take the id property of a keg, find the correct keg, and then set selectedkeg equal to that keg. 
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeleteingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({editing: true});
  }

  //handleRefillingKeg (increment)

  // handle selling pint (decrement)

  render(){
    // conditional rendering
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
                                        onClickingDelete = {this.handleDeleteingKeg} 
                                        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} />
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