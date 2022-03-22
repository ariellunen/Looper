import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
   "fontFamily": 'Monospace',
   "fontSize": 24
  }
});

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
