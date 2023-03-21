import * as ActionType from "./types";

const initialState = {
  data: null,
};

const updatCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COURSE_SUCCESS: {
      state.data = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default updatCourseReducer;
