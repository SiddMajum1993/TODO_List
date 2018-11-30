import React, { Component } from 'react';

import LoginComponent from '../component/login.component';
import MainComponent from '../component/toDo/main.component';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div id="header">
          <p>TODO List</p>
        </div>

        <Route path='/main' exact component={MainComponent} />
        <Route path='/' exact component={LoginComponent} />


      </div>
    );
  }
}

export default App;
