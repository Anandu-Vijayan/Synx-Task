import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createOrganization = createAsyncThunk(
  'organization/createOrganization',
  async (organizationData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/organizations', organizationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);