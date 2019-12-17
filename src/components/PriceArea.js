import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteCART_ITEM, purchaseITEMS } from '../actions';

class PriceArea extends Component {
  constructor(props){
    super(props);

    this.state = {
      fees: 0
    };

  }

  render(){
    return(
    <form  >
      <h1>Price:</h1>
      <br />
      <h5 className="checkout-total">Merchandise: <p className="fright">${this.props.cartprice}.00</p></h5>
      <h5>Fees: <p className="fright">${this.state.fees == 0 ? '0.00' : this.state.fees + '.00'}</p></h5>
      <h5>Final: <p className="fright">${this.props.cartprice + this.state.fees}.00</p></h5>
      <button className="fright">Checkout</button>
    </form>
  )}
}

export default PriceArea;
