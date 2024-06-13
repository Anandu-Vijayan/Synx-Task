import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetings } from '../../features/meeting/meetingThunks';
import { useNavigate } from 'react-router-dom';

const MeetingList = () => {
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings?.meetings);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);

  const handleCreateMeeting = () => {
    navigate('/schedule-meeting');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Meetings</h2>
        <button 
          onClick={handleCreateMeeting} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Create Meeting
        </button>
      </div>
      <ul className="grid gap-4">
        {meetings?.map((meeting) => (
          <li key={meeting.id} className="bg-white shadow-md rounded-md p-4">
            {meeting.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
