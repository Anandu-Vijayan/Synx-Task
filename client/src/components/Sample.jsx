import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sample = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Get token from local storage

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleMeetingClick = () => {
    navigate('/meetings');
  };

  const handleMessageClick = () => {
    navigate('/messages');
  };

  const handleUsersClick = () => {
    navigate('/users');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {token && (
        <div className="absolute top-0 left-0 w-full flex justify-between p-4 bg-gray-100">
          <button
            onClick={handleMeetingClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Meeting
          </button>
          <button
            onClick={handleMessageClick}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Message
          </button>
          <button
            onClick={handleUsersClick}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Users
          </button>
          <button
            onClick={handleLogoutClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
      <div className="text-4xl font-bold text-center font-serif mb-8">
        Welcome to App
      </div>
      <div className="flex justify-end">
        {/* Conditionally render the login and register buttons if token is not present */}
        {!token && (
          <>
            <button
              onClick={handleLoginClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            >
              Login
            </button>
            <button
              onClick={handleRegisterClick}
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sample;
