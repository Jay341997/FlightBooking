import { applyMiddleware,createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import  { airport_details, available_flight,addContact }  from "./reducers";
import { combineReducers } from "redux";


const middleware = applyMiddleware(promise(),thunk,createLogger())
const reducer= combineReducers({
  airport_details,
  available_flight,
  addContact
})

export default function configureStore(preloadedState) {
  return createStore(reducer,preloadedState,middleware)
}
