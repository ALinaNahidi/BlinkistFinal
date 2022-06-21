import { combineReducers } from "redux";
import blinksReducer from "./blinks";

export default combineReducers({
  blinks: blinksReducer,
 });
