import api from "../../../../utils/apiUtil";
import * as ActionType from "./types"

export const actFetchListCourse = () => {
    return async (dispatch) => {
        try {
            const result = await api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            dispatch({
                type:ActionType.LIST_COURSE_SUCCESS,
                payload:result.data
            })
        }
        catch(error){
            console.log(error?.response)
        }
    }
}

export const actDeleteCourse = (id) => {
    return async (dispatch) => {
        try {
            const result = await api.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
            dispatch({
                type:ActionType.DELETE_COURSE_SUCCESS,
                payload:result.data
            })
            dispatch(actFetchListCourse())
        }
        catch(error){
            console.log(error?.response)
        }
    }
}

