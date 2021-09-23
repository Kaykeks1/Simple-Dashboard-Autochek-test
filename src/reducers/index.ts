import { combineReducers } from "redux";

import dashboard from "./dashboard";
import details from "./details";

export default combineReducers({
  dashboard,
  details
});