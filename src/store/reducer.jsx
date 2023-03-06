import { combineReducers } from "redux";
import listUserReducer from "../pages/AdminTemplate/ManageUserPage/ListUser/reducer"

const rootReducer = combineReducers({listUserReducer})

export default rootReducer;