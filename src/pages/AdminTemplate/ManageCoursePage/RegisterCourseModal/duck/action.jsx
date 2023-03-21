import api from "../../../../../utils/apiUtil";
import * as ActionType from "./types";

export const actFetchListUserNotRegistered = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        "QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_NOT_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListUserWaiting = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        `QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_WAITING,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};

export const actFetchListUsereRegistered = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const result = await api.post(
        "QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
        maKhoaHoc
      );
      dispatch({
        type: ActionType.LIST_USER_REGISTERED,
        payload: result.data,
      });
    } catch (error) {
      console.log(error?.response);
    }
  };
};
