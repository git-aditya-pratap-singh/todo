import todoReducer from "./todoReducer";
//import Storage from "./storage";
import {combineReducers} from "redux";


const rootReducers = combineReducers({
    todoReducer,
    //Storage
})

export default rootReducers;