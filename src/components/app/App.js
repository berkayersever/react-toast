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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="danger">Danger!</Button>
        {/*<button onClick={this.buttonClicked}>Meet Someone New</button>*/}
      </header>
    </div>
  );
}

export default App;
