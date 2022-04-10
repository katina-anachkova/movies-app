import { useState, useEffect } from "react";
import MovieTemplate from "./MovieTemplate";
import * as movieService from '../../services/MovieService';

const Catalog = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then((movies) => {
                setMovies(movies);
            });
    }, []);

    return (
        <>
            <section id="hero"></section>
            <section >
                {movies.length > 0
                    ? <ul className="flex__list">
                        {movies.map(x => <MovieTemplate key={x._id} movie={x} />)}
                    </ul>
                    : <p className="flex__list">No movies in database!</p>
                }
            </section>
        </>
    );
}

export default Catalog;