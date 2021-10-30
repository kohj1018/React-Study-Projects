import React from 'react';

const Movie = ({ movie, removeMovie }) => {  // 괄호 안에 props 대신 이렇게 { movie }하면 아래에서 props.movie 안해도된다.
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">
                    ({movie.year})
                </span>
            </div>
            <div>
                <button onClick={() => removeMovie(movie.id)}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default Movie;