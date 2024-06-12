import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/auth/authThunks';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
