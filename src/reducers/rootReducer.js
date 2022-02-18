import { combineReducers } from "redux";
import currentUserReducer from './currentUserReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    status: statusReducer
});

export default rootReducer;