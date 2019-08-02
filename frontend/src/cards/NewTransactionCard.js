import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import SendReceiveButton from '../subcomponents/SendReceiveButton';
import QuantityInput from '../subcomponents/QuantityInput';
import TickerSelect from '../subcomponents/TickerSelect';
import SubmitButton from '../subcomponents/SubmitButton';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NewTransactionCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Box m={1}>
            <SendReceiveButton appState={props.appState} handleInputChange={props.handleInputChange}/>
          </Box>
        </Grid>
        <Grid item xs>
          <Box m={1}>
            <QuantityInput appState={props.appState} handleInputChange={props.handleInputChange}/>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Box m={1}>
            <TickerSelect appState={props.appState} handleInputChange={props.handleInputChange}/>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Box m={3.1}>
            <SubmitButton handleNewTransactionSubmit={props.handleNewTransactionSubmit}/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
