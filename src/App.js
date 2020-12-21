import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InfoPanel from './components/InfoPanel'
import LastPrices from './components/LastPrices'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: {}
    };
  }  

  componentDidMount(){
    fetch('https://api.crypto-trend.live/trend')
    .then(response => response.json())
    .then(data => this.setState({trend: data}))
    .catch( err => console.error(err));
   }
  
  render() {
    let priceUpdateTimestmap = new Date(this.state.trend.update_timestamp * 1000);
    let timestampStr = priceUpdateTimestmap.getHours() + ':' + ('0' + priceUpdateTimestmap.getMinutes()).substr(-2) + ':' + ('0' + priceUpdateTimestmap.getSeconds()).substr(-2);
    console.log('this.state.trend.prices in App.render(): '+this.state.trend.prices)
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Cryptocurrency Market Trend</h1>
          <LastPrices prices={this.state.trend.prices} 
                      last_update={this.state.trend.update_timestamp}/>
        </Jumbotron>
        <InfoPanel baskets={this.state.trend.baskets}/>
        <Jumbotron className="p-1">
          <p className="header">
            Copyright <a href="https://harchikov.eu" target="_blank" rel="noreferrer">harchikov.eu</a> | Proudly built with <a href="https://reactjs.org/">React</a> and hosted on <a href="https://www.netlify.com/">Netlify</a> | Prices updated at {timestampStr}
          </p>
        </Jumbotron>
      </Container>
      ); 
  }  
}

export default App;
