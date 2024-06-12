import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, messageData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/messages`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
