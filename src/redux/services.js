
//services actions
import { Actions } from "./actions";
export const inputsService = (e, input) => Actions.InputsActions(e, input);
//function Obj
export const SigResponseService = (responseObj) => Actions.SigResponseActions(responseObj);