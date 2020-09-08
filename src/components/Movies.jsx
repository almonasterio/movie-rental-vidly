import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./Pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    moviesPerPage:4,
    pageNumber:1

  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  

  handlePageChange = (e,pageNumber) => {
    e.preventDefault();
      this.setState({pageNumber: pageNumber})
  };

  display= ()=>{
    const {pageNumber}=this.state;
    const start= (pageNumber-1)*this.state.moviesPerPage;
    const end= (pageNumber)*this.state.moviesPerPage;
    return [...this.state.movies].slice(start,end)
  }


  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;
    const displayMovies=this.display()
    console.log("state,pageNumber", this.state.pageNumber);
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {displayMovies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination onPageChange={this.handlePageChange} numberPages={Math.ceil(this.state.movies.length / this.state.moviesPerPage)} />
      </React.Fragment>
    );
  }
}

export default Movies;
