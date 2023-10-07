import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Splash from './pages/Greeting';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
  </Routes>
);

export default App;
