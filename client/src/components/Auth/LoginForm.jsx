import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../../features/auth/authThunks';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state.auth)
  console.log(state,"sdfsdfsdfsdfsdf");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 shadow-md p-8 rounded-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="mb-6">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Login</button>
      </form>
      <div className="text-center">
        <span className="text-blue-500">Don't have an account? </span>
        <Link to="/register" className="font-semibold text-blue-500 hover:underline hover:text-blue-600">Register</Link>
      </div>
    </div>
  );
};

export default LoginForm;
