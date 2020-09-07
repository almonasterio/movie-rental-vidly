import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieComponent from "./MovieComponent";
import iconComponent from "./iconComponent";


export default class Movies extends Component {
  constructor(){
    super()
    this.state = {
      movies: getMovies(),
    };
    this.deleteMovie=this.deleteMovie.bind(this)
  }

deleteMovie(movieId){
      let movies = [...this.state.movies].filter(movie=>movie._id!==movieId);

      this.setState({movies})
  }

  render() {
    console.log(this);
    const moviesTable= this.renderMovies();
    return (
      <div>{moviesTable}</div>
    );
  }

  renderMovies(){
      const allMovies= this.state.movies.map(e=><MovieComponent deleteMovie={this.deleteMovie} key={e._id} movie={e}><iconComponent/></MovieComponent>)

    return this.state.movies.length? (
      <React.Fragment>
      <h5>Showing {allMovies.length} movies in the database</h5>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {allMovies}
           
          </tbody>
        </table>
        </React.Fragment>
    ) : <h5>There are no movies in the database</h5>
  }
}
