import {createSlice} from '@reduxjs/toolkit';
// import {loginACTION, lastactiveACTION} from '../../Redux-actions/authActions';
const INITIAL_STATE = {
  usersInfo: {
    apiMsg: {
      message: null,
      status: null,
    },
  },
};

const authReducer = createSlice({
  name: 'Authentication',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = authReducer.actions;
export default authReducer.reducer;
