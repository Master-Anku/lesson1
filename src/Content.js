import { useState } from "react";
import { FaTrashAlt, FaHome, FaUser} from "react-icons/fa";


// import { FaHouse } from "react-icons/fa";

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

        <div className="hero"></div>

        {/* move-section */}
        <div className="move-section">
        <h2>  <FaHome /> The Movie Lists</h2> 
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


        {/* Yangon-section */}
         <div className="ygn-section">
          <h2 id="yangon">We Love Yangon</h2>
          <div className="card">
            <div className="card-one">
                <h3>Yangon is very Beautiful</h3>
            </div>
          </div>
         </div>
        {/* mdn */}
         <div className="ygn-section">
          <h2 id="mdy">We Love Mandalay</h2>
          <div className="card">
            <div className="card-one">
                <h3>Mandalay is very Beautiful</h3>
            </div>
          </div>
         </div>
      
      </main>
    );
  };
  
  export default Content;
  