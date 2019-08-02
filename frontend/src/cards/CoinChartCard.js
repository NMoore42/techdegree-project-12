import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  getCoinPerformance = () => {
    let data = this.props.appState.historicalPrices[this.props.appState.mainPage].map(obj => {
      return obj.price > 1 ? parseFloat(obj.price.toFixed(2)) : parseFloat(obj.price.toFixed(6))
    })
    let returnArr = []
    data.forEach((element, index) => {
      let date = new Date()
      //This provides a uniform date for the a-xis.  However, if data is not pulled each day, it will not be representative of the actual date.
      date.setDate(date.getDate() - (6-index))
      returnArr.push({day: date.toString().slice(4,10), price: element})
    })
    return returnArr
  }

  getPortfolio = () => {
    let data = this.props.appState.historicalPrices
    let returnArr = []
    for (let i = 0; i < 7; i ++) {
      let value = 0
      let date = new Date()
      //This provides a uniform date for the a-xis.  However, if data is not pulled each day, it will not be representative of the actual date.
      date.setDate(date.getDate() - (6-i))
      for (let key in data) {
        value += (data[key][i].price * this.props.appState.coins[key])
      }
      returnArr.push({day: date.toString().slice(4,10), price: value.toFixed(2)})
    }
    return returnArr
  }

  toggleCharts = () => {
    return this.props.appState.mainPage === "Charts" ? this.getPortfolio() : this.getCoinPerformance()
  }

  render() {
    return (
      <LineChart
        width={1150}
        height={250}
        data={this.toggleCharts()}
        margin={{
          top: 10, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={['auto', 'auto']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>
    );
  }
}
