import LoggedReducer from "./IsLogged"
import { combineReducers } from "redux"



const allReducers = combineReducers(
    {
        isLogged:LoggedReducer
    }
)

export default allReducers