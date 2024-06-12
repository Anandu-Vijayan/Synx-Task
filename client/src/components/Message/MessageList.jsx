import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../features/message/messageThunks';
import { useNavigate } from 'react-router-dom';

const MessageList = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages?.messages);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendMessageClick = () => {
    navigate('/send-message');
  };

  return (
    <div className="relative container mx-auto px-4 py-8">
      <button
        onClick={handleSendMessageClick}
        className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
      <h2 className="text-2xl font-semibold mb-4">Messages</h2>
      <ul className="grid gap-4">
        {messages?.map((message) => (
          <li key={message.id} className="bg-white shadow-md rounded-md p-4">
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
