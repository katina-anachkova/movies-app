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
//     return api.get(`/data/movies?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
// }

export async function createMovie(movie) {
    return api.post('/data/catalog', movie)
}

export async function editmovie(id, movie) {
    return api.put('/data/catalog/' + id, movie)
}

export async function deletemovie(id) {
    return api.del('/data/catalog/' + id)
}

export async function likemovie(movieId) {
    return api.post('/data/likes', {
        movieId
    });
}

export async function getLikesBymovieId(movieId) {
    return api.get(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
}

export async function getMyLikeBymovieId(movieId, userId) {
    return api.get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}


