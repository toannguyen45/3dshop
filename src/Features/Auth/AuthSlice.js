import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from './AuthService';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      return await AuthService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logout = createAction('auth/logout');

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.data;
        localStorage.setItem('user', JSON.stringify(action.payload.data));
        localStorage.setItem('token', action.payload.data.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message || action.error.message;
      })
      .addCase(logout, state => {
        state.user = null;
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = '';
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      });
  },
});

export default authSlice.reducer;
