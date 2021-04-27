import './App.css';
import React, { Component } from 'react';
import Header from './views/header';
import Sidebar from './views/sidebar';
import UKviewer from './views/ukviewer';
import { Grid, Box } from '@material-ui/core';

class App extends Component {
  
  render() {

    return (
      <Grid container>
        <Header />
        <Sidebar/>
        {/* <UKviewer/> */}
      </Grid>
    );
  } 
}

export default (App);