
import { React, useEffect, useState } from 'react';
import * as movieService from '../../services/MovieService.js';
import MovieTemplate from './MovieTemplate.js';

function List(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then((movies) => {
                setMovies(movies);
                //  console.log(movies)
            });
    }, []);

    const filteredMovies = movies.filter((movie) => {
        if (props.input === '') {
            return movie;
        } else {
            return movie.title.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul className="flex__list">
            {filteredMovies.map((movie) => (
                <MovieTemplate key={movie._id} movie={movie}/>
            ))}
        </ul>
    )
}

export default List