import React, {Component} from 'react';
import { connect } from 'react-redux';
import { purchaseITEMS } from '../actions';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51GuPZeD31gLM6mOREEIkNOJxkYuqPqnd6pYprQUnofThPTuXOsvzsBQXc8TinxiBnaooboo5S3dvXZudnwADCqSA004oI1T2nx");

const CheckoutForm = (price) => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
   event.preventDefault();

   const billing_details = {
     name: event.target.name.value,
     email: 'a@huf.com'
   }

   const { error, paymentMethod } = await stripe.createPaymentMethod({
     type: "card",
     card: elements.getElement(CardElement),
     billing_details: billing_details
   });

   if(!error){
     const { id } = paymentMethod;

     console.log(id);

     try{
       const { data } = await axios.post('http://localhost:3000/checkout/api/payments', {id, amount: price});
     } catch (error){
       console.log(error.response)
     }
   }
 }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label className="checkout_label">Name:</label>
        <input type="text" name="name" />
      </div>

      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  )
}

// onClick = {(event) => this.purchaseCartItems(event, this.props.cartitems)}

class PriceArea extends Component {
  constructor(props){
    super(props);

    this.state = {
      fees: 0,
      showCheckoutPayment: false
    };

    this.purchaseCartItems = this.purchaseCartItems.bind(this);
    this.displayPaymentArea = this.displayPaymentArea.bind(this);
  }



  displayPaymentArea() {
    this.setState({showCheckoutPayment: !this.state.showCheckoutPayment});
  }

  purchaseCartItems(event, items){
    let date = new Date();
    const dateString = date.toLocaleDateString("en-US")

    console.log('inside purchaseCartItems');
    console.log(items)
    this.props.purchaseITEMS(items, dateString);
  }





  render(){
    return(
    <div>
      <h1>Price:</h1>
      <br />
      <h5 className="checkout-total">Merchandise: <p className="fright">${this.props.cartprice}.00</p></h5>
      <h5 className="checkout-total">Fees: <p className="fright">${this.state.fees === 0 ? '0.00' : this.state.fees + '.00'}</p></h5>
      <h5 className="checkout-total">Final: <p className="fright">${this.props.cartprice + this.state.fees}.00</p></h5>
      <button type="button" className="fright mobile-checkout-btn" onClick={(event) => this.displayPaymentArea()}>Checkout</button>

      <br />
      <br />

      {
        this.state.showCheckoutPayment &&
          <CheckoutForm price = {this.props.cartprice + this.state.fees}/>
      }

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
