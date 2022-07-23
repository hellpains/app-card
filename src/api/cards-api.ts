import axios from "axios"

export const todolistsAPI = {
    // getTodolists() {
    //     return instance.get<TodolistType[]>(`todo-lists`) /////пример
    // }
}

export const authAPI = {
    login() {
        return instance.post('auth/login')
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    },
    me(){
        return instance.get('auth/me')
    }
}

// types




// settings
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '37224276-0334-42ce-b08a-d82d9d4f8d89'
    }
})