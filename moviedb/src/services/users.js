import * as api from './Api';

export async function getAllUsers() {
    return api.get('/users')
}

export async function updateUser (userId, user) { 
    return api.put(`/users/` + userId, user)
}

