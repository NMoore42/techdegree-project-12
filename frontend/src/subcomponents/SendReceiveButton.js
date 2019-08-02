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

const currencies = [
  {
    value: 0,
    label: '',
  },
  {
    value: 1,
    label: 'Add',
  },
  {
    value: -1,
    label: 'Remove',
  }
];

export default function TextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-select-currency-native"
        select
        label="Transaction"
        className={classes.textField}
        value={props.appState.newTransType}
        onChange={event => props.handleInputChange("newTransType", parseInt(event.target.value))}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

    </form>
  );
}
