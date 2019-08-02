import React from 'react';
import Box from '@material-ui/core/Box';
import HistoricalTransactionCard from '../cards/HistoricalTransactionCard'
import uuid from 'uuid'


function createArticleCards(props) {
  const transactions = props.appState.transactions
  if (transactions.length > 6) {
    return transactions.slice(0, 6).map(transaction =>
      <HistoricalTransactionCard
        color={transaction.quantity > 0 ? "green" : "red"}
        sign={transaction.quantity > 0 ? "+" : ""}
        quantity={transaction.quantity}
        key={uuid.v4()}
        coin={transaction.coin}/>
    )
  } else if (transactions.length > 0) {
    return transactions.map(transaction =>
      <HistoricalTransactionCard
        color={transaction.quantity > 0 ? "green" : "red"}
        sign={transaction.quantity > 0 ? "+" : ""}
        quantity={transaction.quantity}
        key={uuid.v4()}
        coin={transaction.coin}/>
    )
  } else {
    return <h3>You do not have any previous transactions</h3>
  }
}

export default function HistoricalTransactionContainer(props) {

  return (
    <Box m={-2}>
      {createArticleCards(props)}
    </Box>
  );
}
