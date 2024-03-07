import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([])


  async function fetchMovies() {
    const response = await fetch('https://www.swapi.tech/api/films')

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

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
