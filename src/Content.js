import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [movies, setMovies] = useState([
      {
        id: 1,
        checked: false,
        movie: "The Matrix",
      },
      {
        id: 2,
        checked: false,
        movie: "The Matrix Reloaded",
      },
      {
        id: 3,
        checked: false,
        movie: "The Matrix Revolutions",
      },
    ]);
  
    const handleCheck = (id) => {
      setMovies((prevMovie) => {
        const updatedMovies = prevMovie.map((movie) =>
          movie.id === id ? { ...movie, checked: !movie.checked } : movie
        );
        localStorage.setItem("moviesList", JSON.stringify(updatedMovies));
        return updatedMovies;
      });
    };
  
    const handleDelete = (id) => {
      setMovies((prevMovie) => {
        const updatedMovies = prevMovie.filter((movie) => movie.id !== id);
        localStorage.setItem("moviesList", JSON.stringify(updatedMovies));
        return updatedMovies;
      });
    };
  
    return (
      <main>
        <div className="move-section">
        <h2>The Movie Lists</h2>
        {movies.length ? (
          <ul>
           
            {movies.map((movie) => (
              <li key={movie.id}>
                <input className="check"
                  type="checkbox"
                  checked={movie.checked}
                  onChange={() => handleCheck(movie.id)}
                />
                <label className="move-list" onClick={() => handleCheck(movie.id)}>{movie.movie}</label>
                <FaTrashAlt 
                id="btn-delete"
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(movie.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no movies to watch</p>
        )}
        </div>
      </main>
    );
  };
  
  export default Content;
  