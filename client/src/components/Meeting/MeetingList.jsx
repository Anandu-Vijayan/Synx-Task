import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetings } from '../../features/meeting/meetingThunks';

const MeetingList = () => {
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings?.meetings);

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Meetings</h2>
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
