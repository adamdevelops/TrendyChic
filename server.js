const cors = require('cors');
const express = require('express');
const stripe = require('stripe')('sk_test_51GuPZeD31gLM6mOR8L08XK5fs4ZnipZLuyLdY2OmvaqaGyETtn6Z6umt4FdrstSi9xTrHMTXTUhXzoPkA9nTuVqC00YsNAMRqe')
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.post("/checkout/api/payments", async (req, res, next) => {

  console.log('Confirmed')

  console.log('api backend')

  console.log(req.body)

  const { id, amount } = req.body;



    try{

      const payment = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "USD",
        description: "clothes",
        payment_method: id,
        confirm: true
      })  ;

      console.log(payment);

      return res.status(200).json({
        confirm:'abc123'
      })
    } catch (error) {
      res.status(500).json({statusCode: 500, message: error.message });
    }

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
