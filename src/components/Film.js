import React, {Component} from 'react';

class Film extends Component {
  render(){
    return (<div className="film-div">
      <a href={this.props.url}>{this.props.filmTitle}</a>
      <p className="film-time">{this.props.times}</p>
    </div>)
  }
}

export default Film;
