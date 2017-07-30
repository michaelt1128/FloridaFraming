import { combineReducers } from "redux";
import authReducer from './auth';
import adminReducer from './admin';
import supplyReducer from './supplies';

const rootReducer = combineReducers({
    authReducer,adminReducer,supplyReducer
});

export default rootReducer;