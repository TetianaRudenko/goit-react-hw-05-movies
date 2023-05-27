import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiService } from "services/apiService";


export const HomeComponent = ({data}) => {
  //useEffect(() => {
  // якщо потрібен запит HTTP
  //}, []) - при монтуванні 1раз

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await apiService('/trending/movie/day');
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies()
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      <ul>

        {movies.map(movie =>
        (<li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{ movie.title}</Link>
        </li>))}
        
      </ul>

    </>
  );
};