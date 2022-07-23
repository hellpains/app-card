import {Dispatch} from "redux";
import {authAPI} from "../../api/cards-api";
import {AppThunk} from "../store";

const initialState = {
   email: '',
   password: ''
}

export const registrationReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
   switch (action.type) {
      case "REGISTER-USER":
         return {
            ...state,
            email: action.password,
            password: action.password
         }
      default:
         return state
   }
}

// actions
export const registerUserAC = (email: string, password: string) => {
   return {
      type: 'REGISTER-USER',
      email,
      password
   } as const
}


// thunks
export const registerUserTC = (email: string, password: string) => (dispatch: Dispatch<RegisterActionsType>) => {
   authAPI.register(email, password)
      .then(res => {
         dispatch(registerUserAC(email, password))
      })
}


// types
export type InitialStateType = typeof initialState
export type RegisterUserACType = ReturnType<typeof registerUserAC>

export type RegisterActionsType = RegisterUserACType