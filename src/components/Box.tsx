import React, { useState, useEffect } from 'react';
import useStyles from './Box.style';
import { useUser } from '../context/context';
import { Button, Card, CardContent, CardActions, Typography, Paper, IconButton, Avatar } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';


const Box = () => {
  const classes = useStyles();
  const { user, setUser, url } = useUser();

  const [ loading, setLoading ] = useState(true);
  const [ currentInfoDisplay, setCurrentInfoDisplay ] = useState('name');

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    checkIfUserExists();
  }, [user]);

  /**
   * Fetching user info from given url
   */
  const fetchUsers = async () => {
    const response = await fetch(url);
    const result = await response.json();

    setUser(result.results);
  };

  /**
   * Checking if user array length is greater than 0, if so sets loading to complete (false)
   */
  const checkIfUserExists = () => {
    if (user.length > 0) {
      setLoading(false);
    }
  };

  /**
   * Fetches a new user when button is clicked
   */
  const fetchNewUser = () => {
    if (!loading) {
      fetchUsers();
      setLoading(true);
    }
  };

  return (
    <Card className={classes.box} elevation={2}>
      <Paper 
        elevation={1}
        square 
        classes={{
          root: classes.paper
        }}
      />
      <Avatar
        sizes="large"
        className={classes.avatar}
        alt="Just another picture in paradise"
        src={ loading ? 'https://ischool.illinois.edu/sites/default/files/styles/normal_square/public/images/empty-avatar-01_1.jpg?itok=hAW4etvU' : user[0].picture.large }
      />
      <CardContent>
        <Typography
          className={ currentInfoDisplay === 'name' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My name is...
          </Typography>
          { loading ? 'Getting random person...' : `${user[0].name.first} ${user[0].name.last}` }
        </Typography>

        <Typography
          className={ currentInfoDisplay === 'email' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My email is...
          </Typography>
          { loading ? 'Gathering data...' : user[0].email }
        </Typography>

        <Typography
          className={ currentInfoDisplay === 'age' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My age is...
          </Typography>
          { loading ? 'Gathering data...' : user[0].dob.age }
        </Typography>

        <Typography
          className={ currentInfoDisplay === 'location' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My street is...
          </Typography>
          { loading ? 'Gathering data...' : `${user[0].location.street.number} ${user[0].location.street.name}` }
        </Typography>

        <Typography
          className={ currentInfoDisplay === 'phone' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My phone is...
          </Typography>
          { loading ? 'Gathering data...' : user[0].phone }
        </Typography>

        <Typography
          className={ currentInfoDisplay === 'password' ? 'info  info--active' : 'info' }
          variant="h2"
          component="h1"
        >
          <Typography variant="h4" component="p">
            My password is...
          </Typography>
          { loading ? 'Gathering data...' : user[0].login.password }
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('name') }>
          <PersonIcon />
        </IconButton>

        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('email') }>
          <MailIcon />
        </IconButton>

        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('age') }>
          <EventAvailableIcon />
        </IconButton>

        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('location') }>
          <MapIcon />
        </IconButton>

        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('phone') }>
          <PhoneIcon />
        </IconButton>

        <IconButton onMouseEnter={ () => setCurrentInfoDisplay('password') }>
          <LockIcon />
        </IconButton>
      </CardActions>
      <CardActions className={classes.cardActions}>
        <Button onClick={ fetchNewUser } variant="outlined" color="secondary" size="small">
          { loading ? 'Loading...' : 'Random User' }
        </Button>
      </CardActions>
    </Card>
  );
}

export default Box;