import * as api from '../services/Api';

export async function getAllFavs() {
    return api.get(`/data/favourites`);
}

export async function addFavourite(body){
    return api.post(`/data/favourites`, body)
}