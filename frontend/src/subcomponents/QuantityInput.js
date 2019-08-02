import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: "100%",
  },
}));

export default function TextFields(props) {
  const classes = useStyles();


  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-number"
        label="Quantity"
        value={props.appState.newTransQuantity}
        onChange={event => props.handleInputChange("newTransQuantity", parseFloat(event.target.value))}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

    </form>
  );
}
