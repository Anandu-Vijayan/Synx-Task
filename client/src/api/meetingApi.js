import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

export const scheduleMeeting = async (meetingData) => {
  try {
    const response = await axios.post(`${API_URL}/meetings`, meetingData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const cancelMeeting = async (meetingId) => {
  try {
    const response = await axios.put(`${API_URL}/meetings/${meetingId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getMeetings = async () => {
  try {
    const response = await axios.get(`${API_URL}/meetings`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
