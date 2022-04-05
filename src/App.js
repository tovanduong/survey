import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './component/header';
import Dashboard from './features/admin/admin';
import Main from './features/main';

function App() {
  return (
    <div >
      <Main />
    </div>
  );
}

export default App;
