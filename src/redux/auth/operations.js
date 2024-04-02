import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const $instance = axios.create({
//   baseURL: 'http://localhost:3333/api',
// });

// const authToken = {
//   set(token) {
//     $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     $instance.defaults.headers.common.Authorization = ' ';
//   },
// };
axios.defaults.baseURL = 'http://localhost:3333/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post('/users/register', user);
      setToken(data.user.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    try {
      setToken(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
