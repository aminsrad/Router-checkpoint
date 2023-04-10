import React from "react";
import { Link, useParams } from "react-router-dom";

const Trailldesc = ({ movies }) => {
  const { id } = useParams();
  const foundmovie = movies.find((movie) => movie.id === Number(id));

  return (
    <div>
      <p className="card-text">Description:{foundmovie.description}</p>
      <iframe
        width="560"
        height="315"
        src={foundmovie.trailerURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <br />
      <Link className="btn btn-danger" to={"/"}>
        Go Back To Movies List
      </Link>
    </div>
  );
};

export default Trailldesc;
