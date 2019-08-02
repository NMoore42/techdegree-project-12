import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Container } from '@material-ui/core';
import DeleteProfileButton from '../subcomponents/DeleteProfileButton'
import CancelDeleteProfileButton from '../subcomponents/CancelDeleteProfileButton'
import ConfirmDeleteProfileButton from '../subcomponents/ConfirmDeleteProfileButton'
import logo from '../images/logo.png'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperContainer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: "693px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function showDeleteProfile(props, classes) {
  if (!props.appState.deleteProfile) {
    return <div>
      <Box container m={3}>
        <Grid container m={3} justify="center" spacing={1}>
          <DeleteProfileButton handleInputChange={props.handleInputChange}/>
        </Grid>
      </Box>
    </div>
  } else {
    return <div>
      <Box container m={3}>
        <Grid container m={3} justify="center" spacing={1}>
          <ConfirmDeleteProfileButton handleDeleteProfile={props.handleDeleteProfile}/>
          <CancelDeleteProfileButton handleInputChange={props.handleInputChange}/>
        </Grid>
      </Box>
    </div>
  }
}

export default function ProfileContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paperContainer}>
            <Box m={-3}>
              <h1>
                Your Profile
              </h1>
            </Box>
            <Container maxWidth="sm">
              <Paper className={classes.paper}>
              <img src={logo} width={1406/3} height={886/3} alt="" />
              <h2>Name: {props.appState.user}</h2>
              <h2>Email: {props.appState.email}</h2>
              <h2>Member Since: {props.appState.userMember.slice(0,10)}</h2>
              </Paper>
            </Container>
            {showDeleteProfile(props, classes)}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
