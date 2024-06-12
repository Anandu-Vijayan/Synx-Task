import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../features/message/messageThunks';

const MessageForm = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendMessage({ sender, receiver, content }));
      setSender('');
      setReceiver('');
      setContent('');
    } catch (error) {
      console.error('Message sending error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mt-2"
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mt-2"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessageForm;
