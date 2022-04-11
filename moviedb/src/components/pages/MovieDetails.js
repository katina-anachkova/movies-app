import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as movieService from '../../services/MovieService.js';
import * as favouritesService from '../../services/FavouritesService';
import * as userService from '../../services/users';
import MovieControls from "./MovieControls";
import { getUserData } from '../../util.js';

const MovieDetails = () => {

    const userData = getUserData();
    const params = useParams();
    const movieId = params.id;
    const owner = userData.id;

    const [movie, setMovie] = useState({});
    let [showFav, setShowFav] = useState(true);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movie => {
                setMovie(movie);
            });
    }, []);

    async function onFav() {
        // console.log(owner, 'likes -> ', movie); OK
        await favouritesService.addFavourite({
            movie, owner //server-side -> movie is undefined
        })

        let allUsers = await userService.getAllUsers();

        const actionUser = allUsers.filter(user => user._id === owner);
        const favMovies = actionUser[0]['favMovies'];
        favMovies.push(movie);// non-persisting

        let user = {
            email: userData.email,
            password: userData.password,
            favMovies: favMovies
        }

        userService.updateUser(userData.id, user);

        setShowFav = false;
    }

    async function onFavRemove() {//tbd
        console.log('remove favourite')
    }

    return (
        <section id="details__page" className="details">
            <div className="movie__information">
                <img className="movie__image" src={movie.image} />

                <div className="actions">
                    <MovieControls />
                    {(showFav && userData != null)
                        ? <button className="button" onClick={onFav} to="#">Add to favourites</button>
                        : <button className="button" onClick={onFavRemove} to="#">Remove from favourites</button>
                    }
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