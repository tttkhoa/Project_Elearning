import { combineReducers } from "redux";
import listUserReducer from "../pages/AdminTemplate/ManageUserPage/ListUser/reducer"
import authLoginReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
import addUserReducer from "../pages/AdminTemplate/ManageUserPage/AddUserPage/duck/reducer";
import updateUserReducer from "../pages/AdminTemplate/ManageUserPage/EditUserPage/UpdateUser/reducer";
import listCourseReducer from "../pages/AdminTemplate/ManageCoursePage/duck/reducer";
import addCourseReducer from "../pages/AdminTemplate/ManageCoursePage/AddCoursePage/duck/reducer";
import updatCourseReducer from "../pages/AdminTemplate/ManageCoursePage/EditCoursePage/UpdateCourse/reducer";
import registerCourseReducer from "../pages/AdminTemplate/ManageUserPage/RegisterCourseModal/duck/reducer";
import registerCourseByUserReducer from "../pages/AdminTemplate/ManageCoursePage/RegisterCourseModal/duck/reducer";

const rootReducer = combineReducers({listUserReducer,authLoginReducer,addUserReducer,updateUserReducer,listCourseReducer,addCourseReducer,updatCourseReducer,registerCourseReducer,registerCourseByUserReducer})

export default rootReducer;