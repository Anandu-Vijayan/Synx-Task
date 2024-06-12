import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, createUser, updateUser, deleteUser } from '../../api/userApi';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await getUsers();
  return response.users;
});

export const addUser = createAsyncThunk('user/addUser', async (userData) => {
  const response = await createUser(userData);
  return response.user;
});

export const updateUserById = createAsyncThunk(
  'user/updateUserById',
  async ({ userId, userData }) => {
    const response = await updateUser(userId, userData);
    return response.user;
  }
);

export const removeUserById = createAsyncThunk(
  'user/removeUserById',
  async (userId) => {
    await deleteUser(userId);
    return userId;
  }
);
