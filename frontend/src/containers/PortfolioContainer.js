import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box } from '@material-ui/core';
import NewTransactionCard from '../cards/NewTransactionCard';
import HistoricalTransactionContainer from './HistoricalTransactionContainer'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: "325px"
  },
  paperCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: "352px"
  },
}));

function calcPortfolioBalance(props) {
  let totalVal = 0
  for (let key in props.appState.currentPrices) {
    totalVal += (props.appState.currentPrices[key] * props.appState.coins[key])
  }
  return totalVal.toFixed(0)
}

export default function CoinContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>Total Portfolio Value</h1>
            </Box>
            <Box m={-3}>
              <h6>As of {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h6>
            </Box>
            <Box m={-5}>
              <h1 style={{fontSize: "100px"}}>${calcPortfolioBalance(props)}</h1>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            <Box m={-3}>
              <h4>New Transactions</h4>
            </Box>
            <NewTransactionCard
              appState={props.appState}
              handleNewTransactionSubmit={props.handleNewTransactionSubmit}
              handleInputChange={props.handleInputChange}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            <Box m={-3}>
              <h4>Recent Transactions</h4>
            </Box>
            <br></br>
            <HistoricalTransactionContainer appState={props.appState}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
