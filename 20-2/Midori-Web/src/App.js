import React from 'react';
// import Home from './pages/Home';
import { makeStyles } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import './App.css';

const useStyles = makeStyles(() => ({
  containerHome: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.containerHome}>{renderRoutes(routes)}</div>
    </div>
  );
};

export default App;
