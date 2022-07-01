import {AnyAction, combineReducers, createStore} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

export type DispatchType  = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>()

export const rootReducer = combineReducers({

})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


export type AppActionsType={}

// @ts-ignore
window.store = store;