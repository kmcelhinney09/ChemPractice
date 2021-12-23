import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import { CssBaseline, Container } from '@material-ui/core';



ReactDOM.render(
  <Container>
    <CssBaseline />
    <Header />
    <App />
  </Container>,
  document.getElementById('root')
);
