import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiCall} from '../../API';

export const loginACTION = createAsyncThunk(
  'Authentication/login',
  async data => {
    return apiCall('DoggyDate/api/login/', 'POST', data, false)
      .then(response => {
        return {
          isLogin: true,
          status: response.status,
          data: {
            ...response.data,
          },
        };
      })
      .catch(error => {
        console.error(error);
      });
  },
);
