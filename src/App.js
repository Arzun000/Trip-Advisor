import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{width:'100%', display:'flex', flexWrap:'nowrap'}}>
      <Grid items xs={12} md={4} style={{color:'blue', margin:'20px auto auto 20px'}}>
              <List/>
      </Grid>
      <Grid items xs={12} md={8} style={{color:'blue', margin:'20px auto auto 20px'}}>
        <Map />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
