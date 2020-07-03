const express = require('express');
const app = express();


app.get("/checkout/api/payments", (req, res) => {

  console.log('Confirmed')
  res.send("Payment confirmed");

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
