import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentUploader from 'box-ui-elements/content-uploader'

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
      </header>
      <ContentUploader
        rootFolderId={0}
        token={'0y3FPdICSmXthiYIR9gkPbx6MLS5Km1s'}
      />
    </div>
  );
}

export default App;
