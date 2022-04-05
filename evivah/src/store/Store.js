import { createStore } from "redux"
import allReducers from "../reducers/index"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


const persistConfig={
    key:'root',
    storage,
}

const persistedReducer=persistReducer(
    persistConfig,allReducers
)

const myStore = createStore(persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor=persistStore(myStore) 

export default myStore