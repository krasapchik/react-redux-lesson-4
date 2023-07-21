import { configureStore, combineReducers } from "@reduxjs/toolkit"
import countReducer from "./reducers/CountSlice"
import userReducer from "./reducers/UsersSlice"

const rootReducer = combineReducers({
    countReducer,
    userReducer,
})

const store = configureStore({ reducer: rootReducer })
export default store 