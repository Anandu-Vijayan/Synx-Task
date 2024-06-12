// meetingThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeetings = createAsyncThunk(
    'meeting/fetchMeetings',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/api/meetings');
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const scheduleMeeting = createAsyncThunk(
  'meeting/scheduleMeeting',
  async (meetingData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/meetings', meetingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const cancelMeeting = createAsyncThunk(
  'meeting/cancelMeeting',
  async (meetingId, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/meetings/${meetingId}/cancel`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
