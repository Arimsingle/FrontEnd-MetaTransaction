import { combineReducers } from "redux";
import { inputsReducer } from "./form-inputs/reducer";
import { SignatureResponse } from "./signature-response/reducer";
export const rootReducers = combineReducers({
    inputsReducer,
    SignatureResponse
});