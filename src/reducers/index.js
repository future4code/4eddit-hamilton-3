import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import  todo from './todo'
export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    todo
    
  });
