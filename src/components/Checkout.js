import React, {Component} from 'react';



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
              <img className="checkout-item-pic fleft" src="/tops/7.jpg" alt="clothing item"/>
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/1.jpg" alt="clothing item"/>
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
            <div className="checkout-item">
              <img className="checkout-item-pic fleft" src="/tops/3.jpg" alt="clothing item"/>
              <p className="item-name">White Dress with Black Design</p>
              <p className="item-price">$15</p>
              <button className="remove_button">Remove</button>
            </div>
            <hr />
          </div>
        </div>
        <div className="checkout-price">
          <h1>Price:</h1>
          <br />
          <h5 className="checkout-total">Merchandise: <p className="fright">$60</p></h5>
          <h5>Fees: <p className="fright">$0.00</p></h5>
          <h5>Final: <p className="fright">$60</p></h5>
          <button className="fright">Checkout</button>
        </div>
      </div>

    );
  }
}

export default Checkout;
