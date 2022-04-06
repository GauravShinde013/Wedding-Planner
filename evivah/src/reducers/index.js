import LoggedReducer from "./IsLogged"
import CartReducer from "./CartReducer"
import { combineReducers } from "redux"



const allReducers = combineReducers(
    {
        isLogged:LoggedReducer,
        cart:CartReducer
    }
)

export default allReducers