import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {

    try {
      const response = await fetch('https://www.swapi.tech/api/films')

      if (!response.ok) {
        throw new Error('Failed to fetch movie data')
      }

      const data = await response.json()

      const convertedData = data.result.map((movie) => {
        return {
          id: movie._id,
          title: movie.properties.title,
          openingText: movie.properties.opening_crawl,
          releaseDate: movie.properties.release_date,
        }
      })

      setMovies(convertedData);

    } catch (error) {
      console.error('Error', error);
    }

  }

  useEffect(() => {
    fetchMovies()
  }, [])


  return (
    <React.Fragment>
      <section>
        <button >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
