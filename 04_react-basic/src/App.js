import React, { useState, useEffect } from 'react';

function App() {
  const movies = [
    {title: 'Iron Man 1', year: 2008},
    {title: 'Iron Man 2', year: 2010},
    {title: 'Iron Man 3', year: 2013}
  ];
  const renderMovies = movies.map(movie => {
    return(
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}
 
export default App;
