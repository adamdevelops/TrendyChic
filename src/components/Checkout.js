import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteCART_ITEM, purchaseITEMS } from '../actions';
import PriceArea from './PriceArea';

items = this.props.cart.map(cart_item => ({ ...cart_item, quantity: 0 }))

class Checkout extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkout_price: 0,
      fees: 0,
      products: this.props.cart.map(cart_item => ({ ...cart_item, quantity: 0 }))
    };

    this.renderCart = this.renderCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.calculateCartTotal = this.calculateCartTotal.bind(this);
    this.purchaseCartItems = this.purchaseCartItems.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);

  }

  deleteFromCart(event, item){
    console.log('deleteFromCart checkout')
    console.log(this.state.checkout_price)
    this.props.deleteCART_ITEM(item);
    this.calculateCartTotal();
  }

  purchaseCartItems(event, items){
    console.log('inside purchaseCartItems');
    console.log(this.props.cart)
    console.log(items)
    this.props.purchaseITEMS(items);
  }


  calculateCartTotal(){
    console.log('products')
    console.log(this.state.products)

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


  componentWillMount(){
    this.calculateCartTotal();
  }

  componentWillUnmount(){
    console.log('Unmount')
    this.setState({checkout_price: 0});

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
          <PriceArea cartprice={this.state.checkout_price} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log('State in Cart')
  console.log(state.apps.act.cart)

  return {cart: state.apps.act.cart}
}

export default connect(mapStateToProps, {deleteCART_ITEM, purchaseITEMS})(Checkout);
