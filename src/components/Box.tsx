import React from 'react';
import useStyles from './Box.style';
import Btn from './buttons/Btn';
// import { useUsers } from '../context/context';
import { Card, CardContent, CardActions, Typography, Paper, IconButton, Avatar } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';


const Box = () => {
  const classes = useStyles();

  return (
    <Card className={classes.box} elevation={2}>
      <Paper 
        elevation={1}
        square 
        classes={{
          root: classes.paper
        }}
      />
      <Avatar className={classes.avatar} alt="Just another picture in paradise" src="https://randomuser.me/api/portraits/men/75.jpg" />
      <CardContent>
        <Typography variant="h2" component="h1">
          Alfred Enstein
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <PersonIcon />
        </IconButton>

        <IconButton>
          <MailIcon />
        </IconButton>

        <IconButton>
          <EventAvailableIcon />
        </IconButton>

        <IconButton>
          <MapIcon />
        </IconButton>

        <IconButton>
          <PhoneIcon />
        </IconButton>

        <IconButton>
          <LockIcon />
        </IconButton>
      </CardActions>
      <CardActions className={classes.cardActions}>
        <Btn variant="outlined" color="secondary" size="small" title="Random User" />
      </CardActions>
    </Card>
  );
}

export default Box;