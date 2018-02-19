import React, {Component} from "react";
import InfoTitle from '../components/InfoTitle.js';
import FilmList from '../components/FilmList.js';
import ShowTimesButton from '../components/ShowTimesButton.js';

class InfoBox extends Component {

  constructor(){
    super();
    this.state = {
      title: "Films showing this weekend",
      films: [
        {id: 1, filmTitle: "The Godfather", url: 'http://www.imdb.com/title/tt0068646/', times: "19:00" },
        {id: 2, filmTitle: "The Godfather: Part II", url: 'http://www.imdb.com/title/tt0071562/', times: "21:00" },
        {id: 3, filmTitle: "The Godfather: Part III", url: 'http://www.imdb.com/title/tt0099674/', times: "23:00" }
      ],
      buttonText: "Get film times"
    }
  }


  render(){
    return (
      <div className="infobox-div">
      <InfoTitle title={this.state.title}/>
      <FilmList films={this.state.films} />
      <ShowTimesButton buttonText={this.state.buttonText}/>
    </div>)
  }
}




export default InfoBox;
