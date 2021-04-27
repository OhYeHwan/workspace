import './App.css';
import React, { Component } from 'react';
import Header from './header.jsx';
import Sidebar from './sidebar';
import { withStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
  },
  header: {
    zIndex: theme.zIndex.drawer + 1,
  }
}

class App extends Component {
  render(){
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.header}>
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    );
  } 
}

export default withStyles(styles)(App);