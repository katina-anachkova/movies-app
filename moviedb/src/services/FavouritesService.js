import * as api from './Api.js';

export async function getFavouritesByUser(userId) {
    return api.get(`/data/favourites?where=owner%3D%22${userId}%22`)
}

export async function addFavourite(body){
    return api.post(`/data/favourites`, body)
}