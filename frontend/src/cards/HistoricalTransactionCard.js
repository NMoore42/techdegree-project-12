import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1),
    margin: "10px"
  },
}));

export default function HistoricalTransactionCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography style={{color: props.color}} component="p">
          {props.sign} {props.quantity} {props.coin}
        </Typography>
      </Paper>
    </div>
  );
}
