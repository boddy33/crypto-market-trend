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
    fetch('http://34.107.93.112/trend')
    .then(response => response.json())
    .then(data => this.setState({trend: data}))
    .catch( err => console.error(err));
   }
  
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Cryptocurrency Market Trend</h1>
          <LastPrices btc_price={this.state.trend.btc_price} 
                      eth_price={this.state.trend.eth_price} 
                      xrp_price={this.state.trend.xrp_price} 
                      last_update={this.state.trend.update_timestamp}/>
        </Jumbotron>
        <InfoPanel/>
      </Container>
      ); 
  }  
}

export default App;
