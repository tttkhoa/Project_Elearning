import * as ActionType from "./type";
const initialState={
    loading:false,
    data:null,
    error:null,
}

export const profileHomeReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.PROFILE_REQUEST:{
            state.loading=true;
            state.data=null;
            state.error=null;
            return{...state};
        }
        case ActionType.PROFILE_SUCCESS:{
            state.loading=false;
            state.data=action.payload;
            state.error=null;
            return{...state};
        }
        case ActionType.PROFILE_FAIL:{
            state.loading=false;
            state.data=null;
            state.error=action.payload;
            return{...state};
        }
        default:{
            return{...state};
        }
    }
}
