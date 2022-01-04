import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import { Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {
        main: '#080',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
        disabled: 'rgba(70,68,68,0.61)',
        hint: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      h1: {
        fontFamily: 'Ubuntu Mono',
      },
      h2: {
        fontFamily: 'Ubuntu Mono',
      },
      h3: {
        fontFamily: 'Ubuntu Mono',
      },
      h4: {
        fontFamily: 'Ubuntu Mono',
      },
      h6: {
        fontFamily: 'Ubuntu Mono',
      },
      h5: {
        fontFamily: 'Ubuntu Mono',
      },
      subtitle1: {
        fontFamily: 'Ubuntu Mono',
      },
      subtitle2: {
        fontFamily: 'Ubuntu Mono',
      },
      button: {
        fontFamily: 'Ubuntu Mono',
        fontWeight: 900,
      },
      overline: {
        fontFamily: 'Ubuntu Mono',
      },
    },
})


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <App />
    </Container>
  </ThemeProvider>,
  document.getElementById('root')
);
