import api from "../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actFetchListUser = () => {
  return (dispatch) => {
    dispatch(actListUserRequest());

    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03")
      .then((result) => {
        dispatch({
          type:ActionType.LIST_USER_SUCCESS,
          payload:result.data
        })
      })
      .catch((error) => {
        dispatch(actListUserFail(error));
      });
  };
};

export const actListUserRequest = () => {
  return {
    type: ActionType.LIST_USER_REQUEST,
  };
};

export const actListUserSuccess = (data) => {
  return {
    type: ActionType.LIST_USER_SUCCESS,
    payload: data,
  };
};

export const actListUserFail = (error) => {
  return {
    type: ActionType.LIST_USER_FAIL,
    payload: error,
  };
};
