import {createSlice} from '@reduxjs/toolkit';
import {loginACTION} from '../../Redux/Actions/inedx';
const INITIAL_STATE = {
  usersInfo: {
    loginIs:false,
    splash:true,
    data:{},
    apiMsg: {
      message: null,
      status: null,
    },
  },
};

const authReducer = createSlice({
  name: 'Authentication',
  initialState: INITIAL_STATE,
  reducers: {
    LOGINactions(state, action) {
      state.usersInfo.loginIs = true;
    },
    SPLASHactions(state, action) {
      state.usersInfo.splash = false;
    },
  },
  extraReducers: builder => {
    //------------------------------- loginACTION start -------------------------
    builder.addCase(loginACTION.fulfilled, (state, action) => {
      console.log('loginACTION ', action)
      if (action.payload.isLogin) {
        state.usersInfo.loginIs = action.payload.isLogin;
        state.usersInfo.data =  action.payload.data;
        state.usersInfo.apiMsg.status = action.payload.status;
      } 
    }),
      builder.addCase(loginACTION.pending, (state, action) => {
        state.usersInfo.apiMsg.status = 'pending';
      }),
      builder.addCase(loginACTION.rejected, (state, action) => {
        state.usersInfo.apiMsg.status = action.payload.status;
        
      })
    //------------------------------- loginACTION end -------------------------
  },
});

export const {LOGINactions,SPLASHactions} = authReducer.actions;
export default authReducer.reducer;
