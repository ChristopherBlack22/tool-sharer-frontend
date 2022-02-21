import { combineReducers } from "redux";
import currentUserReducer from './currentUserReducer';
import toolsReducer from './toolsReducer';
import categoriesReducer from "./categoriesReducer";
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    tools: toolsReducer,
    categories: categoriesReducer,
    status: statusReducer
});

export default rootReducer;