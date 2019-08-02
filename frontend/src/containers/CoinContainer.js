import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box } from '@material-ui/core';
import CoinChartCard from '../cards/CoinChartCard'
import ArticleCard from '../cards/ArticleCard'
import uuid from 'uuid'

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
    minHeight: "136px"
  },
  paperContainer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: "200px"
  }
}));

function get7DayAvgPrice(props) {
  let priceArr = props.appState.historicalPrices[props.appState.mainPage]
  let avgPrice = 0
  priceArr.forEach(obj => avgPrice += obj.price)
  return (avgPrice/7).toFixed(2)
}

function createArticleCards(props) {
  let articles = props.appState.articles[props.appState.mainPage]
  if (articles.length > 4) {
    return articles.slice(0, 4).map(article =>
      <Grid key={uuid.v4()} item>
        <ArticleCard
          appState={props.appState}
          coin={props.appState.mainPage}
          handleArticleSave={props.handleArticleSave}
          articleData={article}
        />
      </Grid>
    )
  } else if (articles.length > 0) {
    return articles.map(article =>
      <Grid key={uuid.v4()} item>
        <ArticleCard
          appState={props.appState}
          coin={props.appState.mainPage}
          handleArticleSave={props.handleArticleSave}
          articleData={article}
        />
      </Grid>
    )
  } else {
    return <h3>Sorry, there are no new {props.appState.mainPage} articles at this time</h3>
  }
}

export default function CoinContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box m={-3}>
              <h1>
              {props.appState.mainPage} Past Week Performance
              </h1>
            </Box>
            <CoinChartCard appState={props.appState}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            Current Price
            <Box m={-1}>
              <h1>${props.appState.currentPrices[props.appState.mainPage]}</h1>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperCard}>
            7 Day Average
            <Box m={-1}>
              <h1>
              ${get7DayAvgPrice(props)}
            </h1>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperContainer}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={1}>
                  {createArticleCards(props)}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
