import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as movieService from '../services/MovieService.js';
import * as favouritesService from '../services/FavouritesService.js';
import MovieControls from "./MovieControls";
import { getUserData } from '../util.js';

const MovieDetails = () => {

    const userData = getUserData();
    const params = useParams();

    const [movie, setMovie] = useState({});
    const [isFav, setIsFav] = useState(0);

    const showFavButton = userData != null && isFav == false;
    const movieId = params.id;

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movie => {
                setMovie(movie);
            });
    }, [movie.likes]);

    async function onFav() {

        let owner = userData.id;

        await movieService.getOne(params.id).then((result) => {
            result.likes.push(owner);
            setIsFav(true)
        });//non-persisting

        console.log(movie, owner)// obj + id
        favouritesService.addFavourite({
            movie, owner
        })            
    
    }

    return (
        <section id="details__page" className="details">
            <div className="movie__information">
                <img className="movie__image" src={movie.image} />

                <div className="actions">
                    <MovieControls />
                    {showFavButton
                        ? <button className="button" onClick={onFav} to="#">Add to favourites</button>
                        : null
                    }
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                    </div>
                </div>
            </div>
            <div className="movie__description">
                <h3>{movie.title}</h3>
                <h3>Description:</h3>
                <p>{movie.description}</p>
            </div>
        </section>
    );
}

export default MovieDetails;