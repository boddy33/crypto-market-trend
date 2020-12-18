import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class InfoPanel extends Component {
    render() {
        const p = this.props;
        console.log(p)
        if (!p || !p.baskets)
            return (<span>Loading...</span>);

        let market_trend = p.baskets.filter(elem => elem.basket_code === 'MARKET')[0]
        let bitcoin_trend = p.baskets.filter(elem => elem.basket_code === 'BITCOIN')[0]
        let altcoins_trend = p.baskets.filter(elem => elem.basket_code === 'ALTCOINS')[0]

        let market_text = getTextForTrend(market_trend.trend_code, market_trend.trend_started_timestamp)
        let bitcoin_text = getTextForTrend(bitcoin_trend.trend_code, bitcoin_trend.trend_started_timestamp)
        let altcoins_text = getTextForTrend(altcoins_trend.trend_code, altcoins_trend.trend_started_timestamp)

        return (<Container className="p-4">
        <Jumbotron>
        <Row>
            <Col className="text-center">
                <h2>Market</h2>
                <h4>{market_text}</h4>
            </Col>
            <Col className="text-center">
                <h2>Bitcoin</h2>
                <h4>{bitcoin_text}</h4>  
            </Col>
            <Col className="text-center">
             <h2>Altcoins</h2>
                <h4>{altcoins_text}</h4>  
            </Col>
        </Row>  
        </Jumbotron>
        </Container>)
    }
}

function getTextForTrend(code, timestamp) {
    let text = ''
    switch(code) {
        case -1:
            text = '📉 DOWNWARDS started on ';
            break;
        case 1:
            text = '🚀 UPWARDS started on ';
            break;
        default:
            text = '🔀 SIDEWAYS started on '
    }
    let dateObj = new Date(timestamp * 1000)
    text += dateObj.toLocaleDateString()
    text += ' at ' + dateObj.toLocaleTimeString()
    return text;
}

export default InfoPanel;
