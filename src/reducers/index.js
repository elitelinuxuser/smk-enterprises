import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";

// Combine the reducers and export
export default combineReducers({
  data,
  auth
});
