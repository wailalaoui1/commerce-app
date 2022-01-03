import { Typography, Button, Divider } from '@material-ui/core';
// import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { Link } from 'react-router-dom'
import { PayPalButton } from "react-paypal-button-v2";
import Review from './Review';

// const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, backStep }) => {
   const token = () => (console.log(checkoutToken)) 
   token();
    return (
        <>
          <Review checkoutToken={checkoutToken} />  
          <Divider />
          <Typography variant='h5' style={{ margin: '20px 0', textAlign: 'center' }} gutterBottom>Payment Methods</Typography>
          {/* <Typography variant='h6' style={{ margin: '20px 0' }} gutterBottom>Pay With Stripe</Typography>
          <Elements stripe={stripePromise}>
              <ElementsConsumer>
                  {({ elements, stripe }) => (
                      <form>
                          <CardElement />
                          <br /> <br />
                          <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                             Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                         </Button>
                      </form>                   
                  )}
                  
                </ElementsConsumer>
          </Elements> */}
          <Typography variant='h6' style={{ margin: '20px 0' }} gutterBottom>Pay With Paypal</Typography>

                <PayPalButton
                    amount={checkoutToken.live.subtotal.formatted}

                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                        orderId: data.orderID
                        })
                    });
                    }}
                    options={{
                    clientId: "ATw9IB0SGdTWgUpEO-Hh_KqcKHzVg_63sooxCCCopr8CtAw9EE1ymqyFlBLcRARwro0WKhhlazNxseP4",

                }}
                />
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' onClick={backStep}>Back</Button>
                </div> 
        </>
    )
}

export default PaymentForm
 