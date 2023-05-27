import {  useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { apiService } from "../../services/apiService";
import { SearchHeader, SearchForm, SearchFormInput, SearchFormButton  } from "../../pages/Movies/Movies.styled";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const inputValue = useRef(query);
  const [input, setInput] = useState(inputValue.current ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchMovies() {
      try {
        const data = await apiService('/search/movie', `&query=${query}`);
        //console.log(data.results)
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [query])


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.query.value === '') {
      //console.log(form);
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });  
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  return (
    <div>
      <SearchHeader> 
        <SearchForm onSubmit={ handleSubmit }>
          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            value={input}
            onChange={ handleChange } />
          <SearchFormButton type="submit">
            Search
          </SearchFormButton>
        </SearchForm>
      </SearchHeader>
      {query !== '' && movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {query !== '' && movies.length === 0 && (
        <p>Sorry, there are no images with ${query}. Please try again. </p>
      )}
    </div>
  )
  
}

export default Movies;