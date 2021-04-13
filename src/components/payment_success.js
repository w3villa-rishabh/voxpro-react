import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import api from '../api';
import { getCurrentUser } from '../helper';

import { toast } from 'react-toastify';
import logo from '../assets/images/voxpro-images/logo_vp.png';

export default function LoginComponent() {
  const [currentUser] = useState(getCurrentUser());
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let success = params.get('success');

  const [userdetails] = useState({
    subscribed: success
  });
  useEffect(() => {
    if (success) {
      updateSubscription();
    }
  }, [updateSubscription, success]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function updateSubscription() {
    api
      .put('/api/user', { user: userdetails, id: currentUser.id })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          // toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      });
  }

  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      lg={12}
                      xl={12}
                      className="d-flex align-items-center text-center">
                      <Grid item md={12} lg={12} xl={12} className="mx-auto">
                        <div className="py-4">
                          <div className="text-center">
                            <h3 className="display-4 mb-2 font-weight-bold">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={logo}
                                width="200"
                              />
                            </h3>
                          </div>
                          <div>
                            <section>
                              <p>
                                Your payment is successfully recieved, We
                                appreciate your business! If you have any
                                questions, please email
                                <a href="mailto:support@voxpro.com">
                                  support@voxpro.com
                                </a>
                                .
                              </p>
                            </section>

                            <div className="text-center text-black-50 mt-3">
                              Go to{' '}
                              <a
                                href="/dashboard"
                                // onClick={(e) => e.preventDefault()}
                                className="text-first">
                                dashboard
                              </a>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
