import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteCART_ITEM } from '../actions';

class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkout_price: 0,
      fees: 0
    };

    this.renderCart = this.renderCart.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);

  }


  componentWillMount(){
    let final_total = this.state.checkout_price;

    this.props.cart.map((cart_item) => {
        console.log('itemPrice');
        console.log(cart_item.price);

        final_total += cart_item.price;
        console.log('final_total')
        console.log(final_total)
    }
  )
  this.setState({checkout_price: final_total});
}



  renderCart(){
    return this.props.cart.map((cart_item) => {
      return(
        <div key={cart_item.id}>
          <div className="checkout-item" key={cart_item.id}>
            <img className="checkout-item-pic fleft" src={cart_item.imgSrc} alt="clothing item"/>
            <p className="item-name">{cart_item.name}</p>
            <p className="item-price">${cart_item.price}</p>
            <button className="remove_button">Remove</button>
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
          <h1>Price:</h1>
          <br />
          <h5 className="checkout-total">Merchandise: <p className="fright">${this.state.checkout_price}.00</p></h5>
          <h5>Fees: <p className="fright">${this.state.fees == 0 ? '0.00' : this.state.fees + '.00'}</p></h5>
          <h5>Final: <p className="fright">${this.state.checkout_price}.00</p></h5>
          <button className="fright">Checkout</button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  console.log('State in Cart')
  console.log(state.apps.act.cart)
  return {cart: state.apps.act.cart}
}

export default connect(mapStateToProps, {deleteCART_ITEM})(Checkout);