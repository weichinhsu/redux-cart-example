import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import './App.css'
import Product from './Product'
import Cart from './Cart'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Product/>
          <Cart/>
        </Grid>
      </div>
    )
  }
}

export default App
