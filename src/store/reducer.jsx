import { combineReducers } from "redux";
import { courseMenuReducer } from "../pages/HomeTemplate/_component/duck/reducer";
import { listCourseReducer } from "../pages/HomeTemplate/ListCoursePage/duck/reducer";
import { courseHomepageReducer } from "../pages/HomeTemplate/HomePage/duck/reducer";
import { detailCourseReducer } from "../pages/HomeTemplate/DetailCoursePage/duck/reducer";
import { listCourseByCategoryReducer } from "../pages/HomeTemplate/ListCourseByCategory/duck/reducer";
const rootReducer = combineReducers({
    // eslint-disable-next-line
    courseMenuReducer,
    listCourseReducer,
    courseHomepageReducer,
    detailCourseReducer,
    listCourseByCategoryReducer,
})

export default rootReducer;