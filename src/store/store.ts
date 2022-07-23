import {AnyAction, combineReducers, createStore} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RegistrActionsType, registrationReducer} from "./reducers/registrationReducer";

export type DispatchType  = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()

export const rootReducer = combineReducers({
 registration: registrationReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export type AppActionsType= RegistrActionsType

// @ts-ignore
window.store = store;