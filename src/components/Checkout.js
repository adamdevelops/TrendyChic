import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'



class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkout: null
    };

  }

  render(){
    return(
      <div id="checkout-section">
        <div id="checkout_cart">
          <h1>Checkout</h1>
          <div className="checkout-items">
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/7.jpg" />
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/1.jpg" />
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/3.jpg" />
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
          </div>
        </div>
        <div className="checkout-price">
          <h1>Price:</h1>
        </div>
      </div>

    );
  }
}

export default Checkout;
