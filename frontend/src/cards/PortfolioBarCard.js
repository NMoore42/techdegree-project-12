import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = (props) => {
  const coin = props.appState.coins
  const price = props.appState.currentPrices
  return [
    {name: 'BTC', uv: 4000, pv: coin["Bitcoin"] * price["Bitcoin"], amt: coin["Bitcoin"]},
    {name: 'ETH', uv: 3000, pv: coin["Ethereum"] * price["Ethereum"], amt: coin["Ethereum"]},
    {name: 'XRP', uv: 2000, pv: coin["Ripple"] * price["Ripple"], amt: coin["Ripple"]},
    {name: 'LTC', uv: 2780, pv: coin["Litecoin"] * price["Litecoin"], amt: coin["Litecoin"]},
    {name: 'BCH', uv: 1890, pv: coin["Bitcoin Cash"] * price["Bitcoin Cash"], amt: coin["Bitcoin Cash"]},
    {name: 'EOS', uv: 2390, pv: coin["EOS"] * price["EOS"], amt: coin["EOS"]},
    {name: 'ADA', uv: 2390, pv: coin["Cardano"] * price["Cardano"], amt: coin["Cardano"]},
    {name: 'TRX', uv: 2390, pv: coin["TRON"] * price["TRON"], amt: coin["TRON"]},
    {name: 'XLM', uv: 2390, pv: coin["Stellar"] * price["Stellar"], amt: coin["Stellar"]},
    {name: 'ZEC', uv: 3490, pv: coin["Zcash"] * price["Zcash"], amt: coin["Zcash"]}
  ];
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {

    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : $${payload[0].value.toFixed(2)}`}</p>
        <p className="intro">{`Quantity: ${payload[0].payload.amt.toFixed(4)}`}</p>
      </div>
    );
  }

  return null;
};

export default class PortfolioBarCard extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render() {
    return (
      <BarChart
        width={500}
        height={275}
        data={data(this.props)}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="pv" barSize={20} fill={"#3F51B5"} />
      </BarChart>
    );
  }
}
