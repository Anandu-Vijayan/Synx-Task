import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/user/userThunks';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
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
