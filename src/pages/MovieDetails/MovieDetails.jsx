import { useEffect, useRef, useState } from "react";
import { Link, Outlet , useLocation, useParams } from "react-router-dom";
import { apiService } from "services/apiService";
import { BackButton,MovieDescrWrap,  MoviePoster } from "./MovieDetails.styled";
import { FiChevronsLeft } from "react-icons/fi";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await apiService(`/movie/${movieId}`);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);


  return (
    <>
    
      <Link to={backLinkHref.current}>
        <BackButton type='button'>
          <FiChevronsLeft size='12'/> 
          <span>Go back</span>
        </BackButton>
      </Link> 
  
    
      <MovieDescrWrap>
        {movie.poster_path && <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width='200'
        />}

        <div>
          <h1>{movie.title} ({movie.release_date})</h1>
          {/* <span> Release date: {movie.release_date}</span> */}
          <span> Vote average: {movie.vote_average}</span>
          <h2> Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres?.map(genre => (
              <span key={genre.id}> {genre.name} </span>
            ))}
          </p>
        </div>
      </MovieDescrWrap>

      <div>
        <h3> Additional information</h3>
        <ul>
          <li>
            <Link to="cast"> Cast </Link>
          </li>
          <li>
            <Link to="reviews"> Reviews </Link>
          </li>
        </ul>
        <Outlet />
      </div>

    </>
  );
};
export default MovieDetails;