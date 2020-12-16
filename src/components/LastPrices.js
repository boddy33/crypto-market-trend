import React, { Component } from 'react';

class LastPrices extends Component {

    render() {
        let dateStr = ''
        let date = new Date(this.props.last_update * 1000);
        dateStr = date.getHours() + ':' + ('0' + date.getMinutes()).substr(-2) + ':' + ('0' + date.getSeconds()).substr(-2);
        return (
            <p className="text-center font-italic">
                BTC: {this.props.btc_price} USDT // ETH: {this.props.eth_price} USDT // XRP: {this.props.xrp_price} USDT (Updated: {dateStr})
            </p>
        );
    }
}

export default LastPrices;
