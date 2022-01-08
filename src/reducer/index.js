import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    task : taskReducer
})

export default rootReducers;