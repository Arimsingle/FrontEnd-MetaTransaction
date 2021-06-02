import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducers } from "./reducers";

export const reduxStore = () => {
  const middleWareEnhancer = applyMiddleware(ReduxThunk);
  const store = createStore(rootReducers, compose(middleWareEnhancer));;
  return store;
}