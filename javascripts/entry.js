require('../css/main.less');
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg';
import qr from '../images/qr.png';
import Clock from './Clock.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
	  <h2>
            <img src={logo} className="App-logo" alt="logo" />
            Electron - React in Action!
	  </h2>
        </div>
        <Clock />
        <div className="App-footer">
	  <h2>
            &copy; 2017 Harry Zhu &lt;harryzhux@gmail.com&gt;
            <img src={qr} className="App-qr" alt="QR" />
	  </h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
