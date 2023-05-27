import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "services/apiService";
import { ActorsList } from "./Cast.styled";
import { FiSmile } from "react-icons/fi";

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await apiService(`/movie/${movieId}/credits`);
        setActors(data.cast);
      } catch (error) {
        console.log(error);
      }    
    }

     fetchCast();
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 && (
        <ActorsList>
          
          {actors.map(actor => (            
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                  alt={actor.name}
                  width='92'
                  height='92'
                /> 
              ) : (
                <FiSmile size='92' />
              )}
              <p> {actor.name} </p>
              <p> Character: { actor.character}</p>
            </li>
          ))}
        </ActorsList>
      )}
      {actors.length === 0 && (
        <p>Sorry! There is no information about cast</p>
      )}
    </div>
  );
}

export default Cast;