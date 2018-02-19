import React, {Component} from 'react';
import Film from './Film.js'

class FilmList extends Component {

  // var filmNodes = this.props.films.map(film => {
  //   return(
  //     <Film key={film.id} filmTitle={film.filmTitle} times={film.times} >
  //
  //     </Film>
  //   )
  // });

  render(){

    const filmNodes = this.props.films.map(film => {
      return(
        <Film key={film.id} filmTitle={film.filmTitle} times={film.times} url={film.url} >

        </Film>
      )
    });

    return (<div>
      {filmNodes}
    </div>)
  }
}

export default FilmList;
