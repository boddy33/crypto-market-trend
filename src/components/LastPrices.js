import React, { Component } from 'react';

class LastPrices extends Component {

    render() {
        let dateStr = ''
        let date = new Date(this.props.last_update * 1000);
        dateStr = date.getHours() + ':' + ('0' + date.getMinutes()).substr(-2) + ':' + ('0' + date.getSeconds()).substr(-2);
        let eth_price = ''
        let btc_price = ''
        let xrp_price = ''
        if (this.props.eth_price) {
            eth_price = this.props.eth_price.toLocaleString()
        }
        if (this.props.btc_price) {
            btc_price = this.props.btc_price.toLocaleString()
        }
        if (this.props.xrp_price) {
            xrp_price = this.props.xrp_price.toLocaleString()
        }
        return (
            <p className="text-center font-italic">
                BTC: ${btc_price} | ETH: ${eth_price} | XRP: ${xrp_price}
{/*                 <br/>Updated: {dateStr} */}
            </p>
        );
    }
}

export default LastPrices;
