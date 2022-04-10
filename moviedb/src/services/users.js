import * as api from './Api.js';

export async function getAllUsers() {
    return api.get('/users')
}

