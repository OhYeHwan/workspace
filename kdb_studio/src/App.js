import './App.css';
import React, { Component } from 'react';
import Header from './header.jsx';
import Sidebar from './sidebar';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  } 
}

export default App;