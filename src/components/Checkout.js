import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteCART_ITEM } from '../actions';
import PriceArea from './PriceArea';

import { updateCartPrice } from '../reducers/app';

class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.renderCart = this.renderCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);


  }

  deleteFromCart(event, item){
    this.props.deleteCART_ITEM(item);
  }


  renderCart(){
    return this.props.cart.map((cart_item) => {
      return(
        <div key={cart_item.id}>
          <div className="checkout-item" key={cart_item.id}>
            <img className="checkout-item-pic fleft" src={cart_item.imgSrc} alt="clothing item"/>
            <p className="item-name">{cart_item.name}</p>
            <p className="item-price">${cart_item.price}</p>
            <button className="remove_button" onClick={(event) => this.deleteFromCart(event, cart_item)}>Remove</button>
          </div>
          <hr />
        </div>
      )
    }
  )
}

  render(){
    console.log('Final Checkout price');
    console.log(this.state.checkout_price);
    return(
      <div id="checkout-section">
        <div id="checkout_cart">
          <h1>Checkout</h1>
          <div className="checkout-items">
            {this.renderCart()}
          </div>
        </div>
        <div className="checkout-price">
          <PriceArea cartprice={this.props.updateCartPrice} cartitems={this.props.cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log('State in Cart')
  console.log(state.apps.act.cart)

  return {cart: state.apps.act.cart, updateCartPrice: updateCartPrice(state)}
}

export default connect(mapStateToProps, {deleteCART_ITEM})(Checkout);
