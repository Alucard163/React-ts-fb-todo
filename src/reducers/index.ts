import { combineReducers } from "redux";
import data from "./dataReducer";

export const rootReducer = combineReducers({
    data
});
export default rootReducer;