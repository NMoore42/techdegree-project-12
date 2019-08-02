import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const data = (props) => {
  const coin = props.appState.coins
  const price = props.appState.currentPrices
  return [
    {name: 'BTC', value: coin["Bitcoin"] * price["Bitcoin"]},
    {name: 'ETH', value: coin["Ethereum"] * price["Ethereum"]},
    {name: 'XRP', value: coin["Ripple"] * price["Ripple"]},
    {name: 'LTC', value: coin["Litecoin"] * price["Litecoin"]},
    {name: 'BCH', value: coin["Bitcoin Cash"] * price["Bitcoin Cash"]},
    {name: 'EOS', value: coin["EOS"] * price["EOS"]},
    {name: 'ADA', value: coin["Cardano"] * price["Cardano"]},
    {name: 'TRX', value: coin["TRON"] * price["TRON"]},
    {name: 'XLM', value: coin["Stellar"] * price["Stellar"]},
    {name: 'ZEC', value: coin["Zcash"] * price["Zcash"]}
  ].sort((objA, objB) => objA.value - objB.value);
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};


export default class PortfolioPieCard extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={800} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data(this.props)}
          cx={275}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#3F51B5"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
