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

function investments(state =[], action){
  if (action.type === 'INVESTMENTS_LOADED'){
    return action.value
  }
  return state
}

function distributions(state =[], action){
  if (action.type === 'DISTRIBUTIONS_LOADED'){
    return action.value
  }
  return state
}


const rootReducer = combineReducers({
    funds, fundsSize, investments, distributions
  });
  export default rootReducer;