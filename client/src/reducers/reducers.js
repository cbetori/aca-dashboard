import {combineReducers} from "redux";

function funds(state = [], action) {
  if (action.type === "FUNDS_LOADED") {
    return action.value;
  }
  return state;
}

function fundsSize(state = [], action) {
  if (action.type === "FUNDS_SIZE_LOADED") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
    funds, fundsSize
  });
  export default rootReducer;