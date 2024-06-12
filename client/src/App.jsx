import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import BrowserRouter
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import LogoutButton from './components/Auth/LogoutButton';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';
import OrganizationForm from './components/User/OrganizationForm';
import MessageList from './components/Message/MessageList';
import MessageForm from './components/Message/MessageForm';
import MeetingList from './components/Meeting/MeetingList';
import MeetingForm from './components/Meeting/MeetingForm';
import Sample from './components/Sample';


const App = () => {
  return (
    <Router> {/* Wrap your routes with the BrowserRouter */}
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/logout" element={<LogoutButton/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/add-user" element={<UserForm/>} />
          <Route path="/add-organization" element={<OrganizationForm/>} />
          <Route path="/messages" element={<MessageList/>} />
          <Route path="/send-message" element={<MessageForm/>} />
          <Route path="/meetings" element={<MeetingList/>} />
          <Route path="/schedule-meeting" element={<MeetingForm/>} /> 
         <Route path="/" element={<Sample/>}/>
        </Routes>
    </Router>
  );
};

export default App;
