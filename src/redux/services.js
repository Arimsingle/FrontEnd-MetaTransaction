
//services actions
import { Actions } from "./actions";
export const messageService = (message) => Actions.MessageActions.Message(message);
export const inputsService = (e, input) => Actions.InputsActions(e, input);