import axios from "axios"

export const cardsAPI = {}

export const authAPI = {
    // отправить на сервер email and password
    register(data: any) {
        return instance.post('auth/register', data)
    },

    // отправить на сервер email, password and rememberMe
    login(data: any) {
        return instance.post('auth/login', data)
    },

    // отправить на сервер пустой объект
    logout() {
        return instance.delete<ResponseType>('auth/login')
    },

    // отправить на сервер пустой объект
    me() {
        return instance.post('auth/me')
    },

    // отправить на сервер name or avatar (url or base64)
    updatedProfile() {
        return instance.put('/auth/me')
    },

    // отправить на сервер email, from, message
    forgotPassword() {
        return instance.post('auth/me')
    },
}


// types
// type UpdatedProfileType = {
//     updatedUser: {
//         name:string,
//         avatar:string
//     }
//     error?: string
// }


// settings
export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})