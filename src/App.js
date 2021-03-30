import React from 'react';
import {AppBar, SideBar, MainHolder } from './container';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './scss/App.scss';
import './App.css';

function App() {
  return (
    <div className="App">
        <HashRouter>
          <AppBar/>
          <SideBar />
          <MainHolder />
        </HashRouter>
    </div>
  );
}

export default App;
