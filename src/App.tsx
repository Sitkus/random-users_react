import React from 'react';
import Box from './components/Box';
import useStyles from './App.style';
import { Paper } from '@material-ui/core/';
import './css/style.css';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={0} square />
      <Box />
      <Paper className={classes.paper} elevation={0} square />
    </>
  );
}

export default App;
