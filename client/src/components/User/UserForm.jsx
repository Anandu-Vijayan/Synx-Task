import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/user/userThunks';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addUser({ name, email, password, role, organization }));
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
      setOrganization('');
    } catch (error) {
      console.error('User creation error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
      />
      <input
        type="text"
        placeholder="Organization"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Create User
      </button>
    </form>
  );
};

export default UserForm;
