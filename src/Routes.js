import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PropagateLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';
// Layout Blueprints

import { LeftSidebar, MinimalLayout } from './components/all_sidebars';

// Example Pages

import IR35TaxComponent from 'components/ir35_tax/ir35-tax';

// routes for Registration
const RegisterPage = lazy(() => import('./components/register.js'));

// routes for login
const LoginPage = lazy(() => import('./components/login.js'));

// routes for Profile Page
const Profile = lazy(() => import('./components/profile'));

// routes for Dashboard
const DashboardMonitoring = lazy(() => import('./components/dashboard.js'));

//edit profile
const EditProfile = lazy(() => import('./components/profiles/edit_profile'));

//onboarding documents
const Onboarding = lazy(() =>
  import('./components/documents/onboarding_documents')
);

//onboarding documents
const UploadDocument = lazy(() =>
  import('./components/documents/upload_documents')
);

//reset password

const ResetPassword = lazy(() => import('./components/reset_password'));
const PageRecoverCover = lazy(() => import('./components/recover_password.js'));

const Routes = () => {
  const location = useLocation();
  const isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true : false;

  if (!isLoggedIn) {
    localStorage.clear();
    console.log('Token not found');
    // eslint-disable-next-line no-unused-expressions
    <Redirect to="/login" />;
  } else if (
    !!isLoggedIn &&
    (location.pathname === '/login' || location.pathname === '/sign-up')
  ) {
    window.location.href = '/dashboard';
  }

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <PropagateLoader color={'var(--primary)'} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  {/* Please wait while we load Voxpro for you */}
                  <span className="font-size-lg d-block text-dark">
                    Please wait while we load Voxpro for you
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Route
              path={[
                '/dashboard',
                '/profile-edit',
                '/documents',
                '/upload',
                '/ir35-verify',
                '/request-information',
                '/view-profile'
              ]}>
              <LeftSidebar>
                <Switch>
                  <Route path="/dashboard" component={DashboardMonitoring} />
                  <Route path="/profile-edit" component={EditProfile} />
                  <Route path="/documents" component={Onboarding} />
                  <Route path="/upload" component={UploadDocument} />
                  <Route path="/ir35-verify" component={IR35TaxComponent} />
                  <Route path="/view-profile" component={Profile} />
                </Switch>
              </LeftSidebar>
            </Route>

            {/* <Route path={['/view-profile']}>
              <CollapsedSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/view-profile" component={Profile} />
                  </motion.div>
                </Switch>
              </CollapsedSidebar>
            </Route> */}

            <Route
              path={[
                '/login',
                '/sign-up',
                '/recover-password',
                '/api/users/confirmation',
                '/reset-password'
              ]}>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/sign-up" component={RegisterPage} />
                    <Route
                      path="/api/users/confirmation"
                      component={LoginPage}
                    />
                    <Route
                      path="/recover-password"
                      component={PageRecoverCover}
                    />
                    <Route path="/reset-password" component={ResetPassword} />
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
