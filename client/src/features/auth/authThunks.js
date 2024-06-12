import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, logout } from '../../api/authApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    const response = await login({ email, password });
    console.log(response,"sdadasdasdasdadasdsa");
    return response.token;
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }) => {
    const response = await register({ name, email, password });
    return response.user;
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await logout();
});
