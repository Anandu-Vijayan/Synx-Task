import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/user/userThunks';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    navigate('/add-user');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">User List</h2>
        <button
          onClick={handleCreateUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Create User
        </button>
      </div>
      <ul className="grid gap-4">
        {users?.map((user) => (
          <li key={user.id} className="bg-white shadow-md rounded-md p-4">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
