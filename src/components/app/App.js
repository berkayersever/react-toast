import React from 'react';
import Button from '../button/Button';
// import { Button } from 'reactstrap';
import logo from '../../assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
      </header>
    </div>
  );
}

export default App;
