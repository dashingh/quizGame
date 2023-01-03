import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="p-4 bg-primary min-h-screen flex  items-center">
      <Outlet />
    </div>
  );
}

export default App;
