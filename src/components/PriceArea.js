import React, {Component} from 'react';
import { connect } from 'react-redux';
import { purchaseITEMS } from '../actions';

class PriceArea extends Component {
  constructor(props){
    super(props);

    this.state = {
      fees: 0
    };

    this.purchaseCartItems = this.purchaseCartItems.bind(this);
  }

  purchaseCartItems(event, items){
    console.log('inside purchaseCartItems');
    console.log(items)
    this.props.purchaseITEMS(items);
  }

  render(){
    return(
    <div>
      <h1>Price:</h1>
      <br />
      <h5 className="checkout-total">Merchandise: <p className="fright">${this.props.cartprice}.00</p></h5>
      <h5>Fees: <p className="fright">${this.state.fees == 0 ? '0.00' : this.state.fees + '.00'}</p></h5>
      <h5>Final: <p className="fright">${this.props.cartprice + this.state.fees}.00</p></h5>
      <button className="fright" onClick={(event) => this.purchaseCartItems(event, this.props.cartitems)}>Checkout</button>
    </div>
  )}
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log('State in History')
  console.log(state.apps.act.history)

  return {history: state.apps.act.history}
}

export default connect(mapStateToProps, {purchaseITEMS})(PriceArea);
