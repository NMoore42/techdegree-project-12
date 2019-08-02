import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box } from '@material-ui/core';
import CoinChartCard from '../cards/CoinChartCard'
import PortfolioPieCard from '../cards/PortfolioPieCard'
import PortfolioBarCard from '../cards/PortfolioBarCard'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: "352px"
  },
}));

export default function ChartsContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>Portfolio Past Week Performance</h1>
            </Box>
            <CoinChartCard appState={props.appState}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            <Box m={-3}>
              <h4>Portfolio Makeup</h4>
            </Box>
            <PortfolioPieCard appState={props.appState}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            <Box m={-3}>
              <h4>Portfolio Holdings</h4>
            </Box>
            <br></br>
            <PortfolioBarCard appState={props.appState}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
