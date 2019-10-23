const express = require('express');
const engines = require('consolidate');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');
const body = require('body-parser');
const app = express();

app.use(body.json());

var corsobj = {
  orign: 'http://localhost:8081',
  optionSucessStatus: 200,
};
app.use(cors(corsobj));

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
  res.send('works').json;
});

app.get('/paypal', (req, res) => {
  var create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://10.0.2.2:3000/success_redirect',
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
      //console.log(payment.links[1].href);
      //console.log(payment);
      res.send(payment.links[1].href);
    }
  });
});

// app.get('/successURL', (req, res) => {
//   console.log(req);
// });

app.get('/success_redirect', (req, res) => {
  res.render('success');
});

app.post('/success', (req, res) => {
  console.log(req.body.paryerId);
  var paymentID = req.body.paymentId;
  var payer = req.body.paryerId;
  console.log(paymentID);
  console.log(payer);
  if (payer) {
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
    console.log(execute_payment_json);

    paypal.payment.execute(paymentID, execute_payment_json, function(
      error,
      payment,
    ) {
      if (error) {
        console.log(error.response);
        console.log(error);
      } else {
        console.log('Get Payment Response');
        console.log(payment);
        res.send('Success');
      }
    });
  }
});
app.get('/cancel', (req, res) => {
  res.send('http://localhost:3000/cancel');
});

app.listen(3000, () => {
  console.log('Server is running');
});
