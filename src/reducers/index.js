import { combineReducers } from "redux";
import subscribed from "./subscribed";
import auth from "./auth";

const rootReducer = combineReducers({ subscribed, auth });

export default rootReducer;
