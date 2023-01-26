import { createStore, applyMiddleware, combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//import to reducer

const rootReducers = combineReducers({
 
});

const middlewares = [thunkMiddleware];
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
