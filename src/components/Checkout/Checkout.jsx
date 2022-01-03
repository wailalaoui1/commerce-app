import { commerce } from '../../lib/commerce';
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyles from './styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm'; 

const steps = ['Shipping Address', 'Payment Details']

const Checkout = ({ cart }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken ] = useState(null);
    const [ shippingData, setShippingData ] = useState({});

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                setCheckoutToken(token)
            } catch(e) {
                console.log(e)
            }
        }
        generateToken()
    }, [cart]);

    const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
    const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep();    
    } 

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} />

    return (
        <>
        <div className={classes.toolbar} />
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant='h4' align='center'>Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(step => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                  </Stepper>
                  { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
              </Paper>
          </main>  
        </>
    )
}

export default Checkout
