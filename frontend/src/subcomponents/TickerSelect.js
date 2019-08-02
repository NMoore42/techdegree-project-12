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

function currencies(props) {
  const currencies = [
    {
      label: '',
      value: null,
    },
    {
      label: 'Bitcoin',
      value: 'Bitcoin',
    },
    {
      label: 'Ethereum',
      value: 'Ethereum',
    },
    {
      label: 'Ripple',
      value: 'Ripple',
    },
    {
      label: 'Litecoin',
      value: 'Litecoin',
    },
    {
      label: 'Bitcoin Cash',
      value: 'Bitcoin Cash',
    },
    {
      label: 'EOS',
      value: 'EOS',
    },
    {
      label: 'Cardano',
      value: 'Cardano',
    },
    {
      label: 'TRON',
      value: 'TRON',
    },
    {
      label: 'Stellar',
      value: 'Stellar',
    },
    {
      label: 'Zcash',
      value: 'Zcash',
    }
  ];
  return currencies;
}



export default function TickerSelect(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="standard-select-currency-native"
        select
        label="Transaction"
        className={classes.textField}
        value={props.appState.newTransCrypto}
        onChange={event => props.handleInputChange("newTransCrypto", event.target.value)}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {currencies(props).map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

    </form>
  );
}
