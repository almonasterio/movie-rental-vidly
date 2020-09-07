import React, { Component } from "react";

class movieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.movie.title,
      _id: this.props.movie._id,
      numberInStock: this.props.movie.numberInStock,
      dailyRentalRate: this.props.movie.dailyRentalRate,
      genre: this.props.movie.genre.name,
      heartFilled:false,
    };
  }
  fillHeart(){
    console.log(this.state.heartFilled);
    const heartFilled=!this.state.heartFilled;
    this.setState({heartFilled})
  }


  render() {
    const {genre,title,_id,numberInStock,dailyRentalRate}=this.state;
    const heartClass=this.state.heartFilled? "":"-o"

    return (
      <tr>
        <th scope="row">{title}</th>
        <td>{genre}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td><i onClick={()=>this.fillHeart()} className={`fa fa-heart${heartClass}`} aria-hidden="true"></i></td>
        <td>
          <button
            onClick={() => this.props.deleteMovie(_id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default movieComponent;
