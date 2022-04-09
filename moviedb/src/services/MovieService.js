import * as api from './Api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
    return api.get(`/data/catalog?sortBy=_createdOn%20desc`)
}

export async function getOne(id) {
    return api.get(`/data/catalog/` + id)
}

// export async function getMyMovies(userId) {
//     return api.get(`/data/catalog?where=owner%3D%22${userId}%22`)
// }

export async function createMovie(movie) {
    return api.post('/data/catalog', movie)
}

export async function updateMovie(id, movie) {
    return api.put('/data/catalog/' + id, movie)
}

export async function deleteMovie(id) {
    return api.del('/data/catalog/' + id)
}

export async function addFavourite(body){
    return api.post('/data/favourites', body);
}
// export async function getLikesByMovieId(movieId) {
//     return api.get(`/data/catalog/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
// }

// export async function getMyLikesByMovieId(movieId, userId) {
//     return api.get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
// }


