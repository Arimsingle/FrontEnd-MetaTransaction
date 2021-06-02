import { combineReducers } from "redux";
import { inputsReducer } from "./form-inputs/reducer";
import { SignatureResponseReducer } from "./signature-response/reducer";
import { HashResponseReducer } from "./hash-message-response/reducer";
import { RecoverResponseReducer } from "./recover-signer-response/reducer";
export const rootReducers = combineReducers({
    inputsReducer,
    SignatureResponseReducer,
    HashResponseReducer,
    RecoverResponseReducer
});