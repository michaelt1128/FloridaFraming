import { combineReducers } from "redux";
import authReducer from './auth';
import adminReducer from './admin';
import supplyReducer from './supplies';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    supply: supplyReducer
});

export default rootReducer;