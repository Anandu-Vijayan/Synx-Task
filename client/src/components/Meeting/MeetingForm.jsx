import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { scheduleMeeting } from '../../features/meeting/meetingThunks';

const MeetingForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(scheduleMeeting({ title }));
      setTitle('');
    } catch (error) {
      console.error('Meeting scheduling error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Schedule Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
