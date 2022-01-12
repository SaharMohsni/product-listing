import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router"; 
import history from "../../utils/history";

const createReducer = (injectedReducers = {}): object | any => {
  const rootReducer = combineReducers({
 
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};
export default createReducer;