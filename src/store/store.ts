import {AnyAction, combineReducers, createStore} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {registrationReducer} from "./reducers/registrationReducer";

export type DispatchType  = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()

export const rootReducer = combineReducers({
 registration: registrationReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


export type AppActionsType={}

// @ts-ignore
window.store = store;