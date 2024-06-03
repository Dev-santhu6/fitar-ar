import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './payment.css'; // Import the CSS file

function CheckoutForm() {
  const userdetail = JSON.parse(localStorage.getItem('userinfo'));
  const [shop, setShop] = useState(null);
    const [error, setError] = useState('');
  useEffect(() => {

    const fetchShop = async () => {
        try {
            const response = await axios.get(`https://project-fitar-backendss.onrender.com/api/user/getshop/${userdetail}`);
            setShop(response.data);
            setError(null);
        } catch (error) {
            setShop(null);
            setError(error.response.data.message);
        }
    };

    if (userdetail) {
        fetchShop();
    }
}, [userdetail]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    try {
      const response = await axios.post('https://project-fitar-backendss.onrender.com/api/payment/pay', {
        shopOwnerName: `${shop.ownername}`,
        shopName: `${shop.shopname}`,
        ownerAddress: `${shop.owneraddress}`,
        shopAddress: `${shop.shopaddress}`,
        price: 40000 // Example price in cents
      });

      const { clientSecret } = response.data;

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });

      if (error) {
        console.error(error.message);
      } else {
        console.log('Payment successful');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-element">
          <label htmlFor="shopOwnerName">Shop Owner Name</label>
          <input type="text" id="shopOwnerName" name="shopOwnerName" />

          <label htmlFor="shopName">Shop Name</label>
          <input type="text" id="shopName" name="shopName" />

          <label htmlFor="ownerAddress">Owner Address</label>
          <input type="text" id="ownerAddress" name="ownerAddress" />

          <label htmlFor="shopAddress">Shop Address</label>
          <input type="text" id="shopAddress" name="shopAddress" />

          <label htmlFor="cardNumber">Card details</label>
          <CardElement
            id="cardNumber"
            options={{
              style: {
                base: {
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                }
              }
            }}
          />
        </div>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
