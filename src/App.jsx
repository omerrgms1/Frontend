import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import axios from 'axios';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile'; // Profil bileşeninin import edildiği yer
import Register from './pages/register/Register';

const App = () => {
  axios.defaults.baseURL = 'https://bungalovbooking-api-htw4.onrender.com';
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
