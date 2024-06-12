import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import messageReducer from './features/message/messageSlice';
import meetingReducer from './features/meeting/meetingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    message: messageReducer,
    meeting: meetingReducer,
  },
});

export default store;
