import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducers } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const reduxStore = () => {
  const middleWareEnhancer = applyMiddleware(ReduxThunk);
  const store = createStore(rootReducers, composeEnhancers(middleWareEnhancer));;
  return store;
}