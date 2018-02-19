import React, {Component} from 'react';

class ShowTimesButton extends Component {

  logMessage(){
    console.log("You clicked the button to get the film times");
  }

  render(){
    return (<button id="show-times-button" onClick={this.logMessage}>
      {this.props.buttonText}
    </button>)
  }
}

export default ShowTimesButton;
