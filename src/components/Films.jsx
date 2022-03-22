import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((films) => films.json())
      .then((films) => setFilms(films))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1 className="text-center">Studio Ghibli Films</h1>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>

      {films.map((film) => (
        <div className="card w-50 m-2" key={film.id}>
          <img className="card-top" src={film.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {film.director} - {film.release_date}
            </h6>
            <p className="card-text">{film.description}</p>
            <h6 className="card-subtitle">
              {film.rt_score > 50 ? (
                <span className="text-success">{film.rt_score}</span>
              ) : (
                <span className="text-danger">{film.rt_score}</span>
              )}
            </h6>
            <a href={film.url} className="card-link">
              Read More
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Films;
