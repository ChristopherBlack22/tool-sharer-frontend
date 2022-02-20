import { combineReducers } from "redux";
import currentUserReducer from './currentUserReducer';
import toolsReducer from './toolsReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    // tools: toolsReducer,
    status: statusReducer
});

export default rootReducer;