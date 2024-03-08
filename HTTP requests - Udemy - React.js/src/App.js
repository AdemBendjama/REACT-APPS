import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';
import Spinner from './assets/Spinner';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFetchMovies = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/movies.json')

      if (!response.ok) {
        throw new Error('Failed to fetch movie data')
      }

      const data = await response.json()
      const movies = []

      for (const key in data) {
        movies.push(
          {
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          }
        )
      }

      setMovies(movies);
      setError(null)

    } catch (error) {
      console.error('Error', error);
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  const handleAddMovie = async (movie) => {

    try {
      const response = await fetch(
        'https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(movie)
        }
      )

      if (!response.ok) {
        throw new Error('failed to submit data')
      }

      handleFetchMovies()

    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  }

  useEffect(() => {
    handleFetchMovies()
  }, [handleFetchMovies])


  return (
    <React.Fragment>
      <section>
        <button onClick={handleFetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <AddMovie onAddMovie={handleAddMovie} />
        {isLoading
          ? <Spinner />
          : <MoviesList movies={movies} />
        }
        {error && !isLoading && <p>Error: {error}</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
