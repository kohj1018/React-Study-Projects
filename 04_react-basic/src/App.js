import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {  // js에서는 배열에 filter이라는 함수가 있는데 화살표 전에 변수에 iterative하게 배열의 값이 들어오고 그걸 아래 return 옆의 비교연산자를 통해 true가 되는 것만 return 받아 새로 배열을 만드는 것이다.
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return(
      <Movie 
        movie={movie} 
        key={movie.id}
        removeMovie={removeMovie}
      />
    );
  }) : '추가된 영화가 없습니다.';
  const addMovie = (movie) => {
    setMovies([
      ...movies,  // 기존의 movies에 있던 값들이 온다.
      movie
    ]);
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
export default App;
