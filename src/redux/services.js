
//services actions
import { Actions } from "./actions";
export const inputsService = (e, input) => Actions.InputsActions(e, input);
export const SigResponseService = (responseObj) => Actions.SigResponseActions(responseObj);
export const HashResponseService = (responseObj) => Actions.HashResponseActions(responseObj);
export const RecoverResponseService = (responseObj) => Actions.RecoverResponseActions(responseObj);