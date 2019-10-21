const express = require('express');
const engines = require('consolidate');
const paypal = require('paypal-rest-sdk');

const app = express();

app.engine('ejs', engines.ejs);
app.set('views', './views');
app.set('view engine', 'ejs');

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AWHGyUb--Uo3Avh5c3TtyVzj0oavjymzDfaX9q2yuyLwkGt2d5GSvJ7Jj829NEqiGSI-LqmBMneYQGtC',
  client_secret:
    'EDytXb-FXFtxuR44JvEgTHnvx8jQLHm6OYyJ22orgWzt-vVQx66CvcLGkuccyNFOUMowwruLX2EvaUUt',
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/paypal', (req, res) => {
  var create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: 'item',
              sku: 'item',
              price: '1.00',
              currency: 'USD',
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: 'USD',
          total: '1.00',
        },
        description: 'This is the payment description.',
      },
    ],
  };

  paypal.payment.create(create_payment_json, function(error, payment) {
    if (error) {
      throw error;
    } else {
      console.log('Create Payment Response');
      //console.log(payment);
      res.redirect(payment.links[1].href);
    }
  });
});

app.get('/success', (req, res) => {
  var paymentID = req.query.paymentId;
  var payer = req.query.PayerID;
  console.log(req.query);
  console.log(req.query.payerID);

  var execute_payment_json = {
    payer_id: payer,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: '1.00',
        },
      },
    ],
  };

  paypal.payment.execute(paymentID, execute_payment_json, function(
    error,
    payment,
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log('Get Payment Response');
      console.log(JSON.stringify(payment));
      res.render('success');
    }
  });
});
app.get('/cancel', (req, res) => {
  res.render('cancel');
});

app.listen(3000, () => {
  console.log('Server is running');
});
