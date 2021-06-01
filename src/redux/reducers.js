import { combineReducers } from "redux";
import { message } from "./message/reducer";
export const rootReducers = combineReducers({
    message,
});