import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv');
function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
