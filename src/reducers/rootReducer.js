import { combineReducers } from "redux";
import currentUserReducer from './currentUserReducer';
import toolsReducer from './toolsReducer';
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    tools: toolsReducer,
    categories: categoriesReducer
});

export default rootReducer;