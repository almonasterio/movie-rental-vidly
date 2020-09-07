import React from "react";

export default function movieComponent(props) {
  const {title ,_id,numberInStock,dailyRentalRate} =props.movie;
  const genre= props.movie.genre.name;
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{genre}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td><button onClick={()=>props.deleteMovie(_id)} type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  );
}
