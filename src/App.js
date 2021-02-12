import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './App/Components/Navbar';
import Routes from './App/Pages'
import './App.css';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push('/')
  });

  return (
    <React.Fragment>
    <CssBaseline />
    <Appbar />
    <Routes />
  </React.Fragment>
  );
}

export default App;
