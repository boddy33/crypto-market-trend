import React, { Component } from 'react';

class LastPrices extends Component {

    render() {
        //let dateStr = ''
        //let date = new Date(this.props.last_update * 1000);
        //dateStr = date.getHours() + ':' + ('0' + date.getMinutes()).substr(-2) + ':' + ('0' + date.getSeconds()).substr(-2);
        let eth_price = '...'
        let btc_price = '...'
        let xrp_price = '...'
        let ltc_price = '...'
        let bch_price = '...'
        if (this.props.prices) {
            eth_price = this.props.prices.ETH.toLocaleString()
        }
        if (this.props.prices) {
            btc_price = this.props.prices.BTC.toLocaleString()
        }
        if (this.props.prices) {
            xrp_price = this.props.prices.XRP.toLocaleString()
        }
        if (this.props.prices) {
            ltc_price = this.props.prices.LTC.toLocaleString()
        }
        if (this.props.prices) {
            bch_price = this.props.prices.BCH.toLocaleString()
        }
        return (
            <h5 className="text-center font-italic">
                BTC: ${btc_price} | ETH: ${eth_price} | XRP: ${xrp_price} | LTC: ${ltc_price} | BCH: $ {bch_price}
{/*                 <br/>Updated: {dateStr} */}
            </h5>
        );
    }
}

export default LastPrices;
