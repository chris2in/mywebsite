import React from 'react';
import logo from './logo.svg';
import './App.css';
// website is https://chris2in.github.io/mywebsite/
//  after change, do a 'npm run deploy' to deploy to ^ website 
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
          Learn React well, since you asked
        </a>
        <h1>HELLO</h1>
      </header>
    </div>
  );
}

export default App;
