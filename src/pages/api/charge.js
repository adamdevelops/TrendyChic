import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51GuPZeD31gLM6mOR8L08XK5fs4ZnipZLuyLdY2OmvaqaGyETtn6Z6umt4FdrstSi9xTrHMTXTUhXzoPkA9nTuVqC00YsNAMRqe')

export default async (req,res) => {
  const { id, amount } = req.body;

  if(req.method === "POST"){
    try{
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "clothes",
        payment_method: id,
        confirm: true
      });

      console.log(payment);

      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      res.status(500).json({statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

};
