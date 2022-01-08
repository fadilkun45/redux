import {applyMiddleware, createStore } from "redux";
import thunkMiddleware  from "redux-thunk";
import rootReducers from "../reducer";

const store = createStore(rootReducers,applyMiddleware(thunkMiddleware))

export default store
