import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Button, Card, Container } from '@material-ui/core';
import logo from '../assets/images/voxpro-images/logo_vp.png';
import api from '../api';

const stripePromise = loadStripe(
  'pk_test_51IeDwoSEqn4qAqJH1u7VYZHHsDBITZyV7p8NeuCeLud1qif0kpkBCNPBCH7zQXROKBX6Y2h6ijjrrqoGg8k7Tkzy00UEBHtoRf'
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function LivePreviewExample() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  async function handleClickPurchase(event) {
    // event.preventDefault()
    const stripe = await stripePromise;
    const response = await api.post('/api/create_checkout_session', {
      amount: event
    });

    const session = await response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return message ? (
    <Message message={message} />
  ) : (
    <>
      <div className="py-4">
        <Container style={{ maxWidth: '1300px' }}>
          <div className="text-center">
            <h3 className="display-4 mb-2 font-weight-bold">
              <img alt="..." className="img-fluid" src={logo} width="200" />
            </h3>
          </div>
          <div className="text-center mb-3">
            <h1 className="display-4 text-black mb-2 font-weight-bold">
              Plans & Pricing
            </h1>
            {/* <p className="font-size-lg text-black-50">View Our Plans!</p> */}
          </div>
          <Grid container spacing={4}>
            <Grid item lg={3}>
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <div className="card-header text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-first text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Basic
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>£</small>350
                  </div>
                  <div className="font-size-md text-black-50">monthly fee</div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4 btn-outline-second"
                      type="button"
                      id="checkout-button"
                      role="link"
                      onClick={() => handleClickPurchase('350')}>
                      Purchase Now
                    </Button>
                  </div>
                </div>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">3 Users </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">200 contractor</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-danger text-danger mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-danger">Premium support</div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <div className="card-header text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-success text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Intermediary
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>£</small>600
                  </div>
                  <div className="font-size-md text-black-50">monthly fee</div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4 btn-outline-second"
                      type="button"
                      id="checkout-button"
                      role="link"
                      onClick={() => handleClickPurchase('600')}>
                      Purchase Now
                    </Button>
                  </div>
                </div>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">5 Users</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      {' '}
                      500 contractors
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-danger text-danger mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-danger">Premium support</div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <div className="card-header text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-danger text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Advanced
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>£</small>800
                  </div>
                  <div className="font-size-md text-black-50">monthly fee</div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4 btn-outline-second"
                      type="button"
                      id="checkout-button"
                      role="link"
                      onClick={() => handleClickPurchase('800')}>
                      Purchase Now
                    </Button>
                  </div>
                </div>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">10 Users</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      1000 contractors{' '}
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Premium support</div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <div className="card-header text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-primary text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Customised
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small></small>
                  </div>
                  <div className="font-size-md text-black-50">
                    price on quote
                  </div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4 btn-outline-second"
                      type="button"
                      id="checkout-button"
                      role="link"
                      onClick={() => handleClickPurchase('9')}>
                      Purchase Now
                    </Button>
                  </div>
                </div>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Tasks</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Teams</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Premium support</div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
