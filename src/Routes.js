import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PropagateLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';
// Layout Blueprints

import { LeftSidebar, MinimalLayout } from './components/all_sidebars';

// Example Pages
//StartIR35TaxComponent
import StartIR35TaxComponent from 'components/ir35_tax/ir35-tax-start';

import IR35TaxComponent from 'components/ir35_tax/ir35-tax';
// routes for Register as
const RegisterAs = lazy(() => import('./components/register_as'));
// routes for payment success
const Success = lazy(() => import('./components/payment_success'));

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

//company agency document
const AgencyCompanyDocument = lazy(() =>
  import('./components/documents/agency-company-document')
);

// show document list
const DocList = lazy(() => import('./components/documents/documents_list'));

//onboarding documents
const UploadDocument = lazy(() =>
  import('./components/documents/upload_documents')
);

// Subscription plans
const Subscription = lazy(() => import('./components/subscription_plans'));

//reset password
const ResetPassword = lazy(() => import('./components/reset_password'));
const PageRecoverCover = lazy(() => import('./components/recover_password.js'));

//New request
const NewRequestComponent = lazy(() =>
  import('./components/request_information/new-request')
);
// request history
const RequestHistoryComponent = lazy(() =>
  import('./components/request_information/request-history')
);
//Candidate History request
const CandidateHistory = lazy(() =>
  import('./components/ir35_tax/candidate-history')
);

//Candidate query
const CandidateQuery = lazy(() =>
  import('./components/ir35_tax/candidate-query')
);

// candidate job applied
const AppliedJobComponent = lazy(() =>
  import('./components/candidate_jobs/applied_job')
);

// candidate job applied
const CandidatePlacements = lazy(() =>
  import('./components/candidate_jobs/candidate_placements')
);

//my task
const MyTasksComponent = lazy(() =>
  import('./components/availability/my-task')
);

//TasksCalendarComponent
const TasksCalendarComponent = lazy(() =>
  import('./components/availability/calendar')
);

//Save Jobs
const SaveJobComponent = lazy(() =>
  import('./components/candidate_jobs/save_job')
);

// candidate job search
const JobSearchComponent = lazy(() =>
  import('./components/candidate_jobs/job_search')
);

//SearchAgenciesComponent
const SearchAgenciesComponent = lazy(() =>
  import('./components/search/agencies-search')
);

//SearchCompaniesComponent
const SearchCompaniesComponent = lazy(() =>
  import('./components/search/company-search')
);

//CandidateSearchComponent
const CandidateSearchComponent = lazy(() =>
  import('./components/search/candidate-search')
);

//Agency Pending request
const AgencyPending = lazy(() =>
  import('./components/ir35_tax/agency-pending')
);

//Agency History request
const AgencyHistory = lazy(() =>
  import('./components/ir35_tax/agency-history')
);

//Agency enquiry request
const AgencyEnquiry = lazy(() => import('./components/ir35_tax/agency-query'));

//AgencyPendingQuery
const AgencyPendingQuery = lazy(() =>
  import('./components/ir35_tax/view-ir35-questions')
);

//AgencyNewRequestForInformation
const AgencyNewRequestForInformation = lazy(() =>
  import('./components/request_information/new-request-agency')
);

//AgencyUpdateRequestForInformation
const AgencyUpdateRequestForInformation = lazy(() =>
  import('./components/request_information/update-request-agency')
);

//Agency request
const AgencyRequestPending = lazy(() =>
  import('./components/request_information/agency-request-pending')
);

//AgencyRequestHistory
const AgencyRequestHistory = lazy(() =>
  import('./components/request_information/agency-request-history')
);

//AgencyJobsHistory
const AgencyJobsHistory = lazy(() =>
  import('./components/agency_jobs/history')
);

//AgencyJobsHistory
const AgencyJobsLive = lazy(() => import('./components/agency_jobs/live'));

//chat
const ChatPageComponents = lazy(() =>
  import('./components/chat_component/chat')
);

//AgencyPlacementsHistory
const AgencyPlacementsHistory = lazy(() =>
  import('./components/agency_placement/history')
);

//AgencyPlacementsHistory
const AgencyPlacementsPending = lazy(() =>
  import('./components/agency_placement/pending')
);

//AgencyManagementCompany
const AgencyManagementCompany = lazy(() =>
  import('./components/agency-management/company')
);

//AgencyManagementAgency
const AgencyManagementAgency = lazy(() =>
  import('./components/agency-management/agency')
);

const Routes = () => {
  const location = useLocation();
  const isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true : false;
  const user = JSON.parse(localStorage.getItem('user'));

  if (!!isLoggedIn && user !== 'null') {
    if (
      !user.subscribed &&
      (user.role === 'agency' || user.role === 'company')
    ) {
      if (location.pathname !== '/subscription-plans') {
        if (location.pathname === '/success') {
          // eslint-disable-next-line no-unused-expressions
          <Redirect to="/success" />;
        } else {
          window.location.replace(
            window.location.origin + '/subscription-plans'
          );
        }
      }
    } else {
      if (!isLoggedIn) {
        localStorage.clear();
        console.log('Token not found');
        // eslint-disable-next-line no-unused-expressions
        <Redirect to="/login" />;
      } else if (
        !!isLoggedIn &&
        (location.pathname === '/login' || location.pathname === '/sign-up')
      ) {
        if (
          !user.subscribed &&
          (user.role === 'agency' || user.role === 'company')
        ) {
          // eslint-disable-next-line no-unused-expressions
          <Redirect to="/subscription-plans" />;
        } else if (user.role === 'candidate') {
          window.location.href = '/dashboard';
        } else if (
          user.subscribed &&
          (user.role === 'agency' || user.role === 'company')
        ) {
          window.location.href = '/dashboard';
        }
      } else if (
        (!!isLoggedIn && !user.subscribed && user.role === 'agency') ||
        user.role === 'company'
      ) {
        // eslint-disable-next-line no-unused-expressions
        <Redirect to="/subscription-plans" />;
      }
    }
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
                '/document-agency-company',
                '/start-ir35',
                '/ir35-verify',
                '/request-information',
                '/view-profile',
                '/view-document',
                '/candidate-history',
                '/candidate-enquiries',
                '/ir35-pending',
                '/view-ir35-query',
                '/ir35-history',
                '/ir35-enquiries',
                '/request-info',
                '/candidate-placements',
                '/applied-jobs',
                '/jobs-live',
                '/jobs-history',
                '/placements',
                '/tasks',
                '/task-calendar',
                '/save-jobs',
                '/search-job',
                '/search-agencies',
                '/search-companies',
                '/search-candidates',
                '/management-company',
                '/management-agency',
                '/management-candidate',
                '/chat'
              ]}>
              <LeftSidebar>
                <Switch>
                  <Route path="/dashboard" component={DashboardMonitoring} />
                  <Route path="/profile-edit" component={EditProfile} />
                  <Route path="/documents" component={Onboarding} />
                  <Route
                    path="/document-agency-company"
                    component={AgencyCompanyDocument}
                  />
                  <Route path="/upload" component={UploadDocument} />
                  <Route path="/view-document" component={DocList} />
                  <Route path="/start-ir35" component={StartIR35TaxComponent} />
                  <Route path="/ir35-verify" component={IR35TaxComponent} />
                  <Route
                    path="/candidate-history"
                    component={CandidateHistory}
                  />
                  <Route
                    path="/candidate-enquiries"
                    component={CandidateQuery}
                  />
                  <Route path="/ir35-pending" component={AgencyPending} />
                  <Route path="/ir35-history" component={AgencyHistory} />
                  <Route path="/ir35-enquiries" component={AgencyEnquiry} />
                  <Route
                    path="/view-ir35-query"
                    component={AgencyPendingQuery}
                  />

                  <Route path="/view-profile" component={Profile} />

                  <Route path="/request-info">
                    <Route
                      path="/request-info/assign-new-request"
                      component={NewRequestComponent}
                    />
                    <Route
                      path="/request-info/request-history"
                      component={RequestHistoryComponent}
                    />
                    <Route
                      path="/request-info/pending"
                      component={AgencyRequestPending}
                    />
                    <Route
                      path="/request-info/history"
                      component={AgencyRequestHistory}
                    />
                    <Route
                      path="/request-info/new-request"
                      component={AgencyNewRequestForInformation}
                    />
                    <Route
                      path="/request-info/update-request"
                      component={AgencyUpdateRequestForInformation}
                    />
                  </Route>

                  <Route path="/placements">
                    <Route
                      path="/placements/pending"
                      component={AgencyPlacementsPending}
                    />
                    <Route
                      path="/placements/history"
                      component={AgencyPlacementsHistory}
                    />
                  </Route>

                  <Route path="/applied-jobs" component={AppliedJobComponent} />
                  <Route
                    path="/candidate-placements"
                    component={CandidatePlacements}
                  />
                  <Route path="/tasks" component={MyTasksComponent} />
                  <Route
                    path="/task-calendar"
                    component={TasksCalendarComponent}
                  />
                  <Route path="/save-jobs" component={SaveJobComponent} />
                  <Route path="/search-job" component={JobSearchComponent} />
                  <Route path="/jobs-live" component={AgencyJobsLive} />
                  <Route path="/jobs-history" component={AgencyJobsHistory} />
                  <Route
                    path="/search-agencies"
                    component={SearchAgenciesComponent}
                  />
                  <Route
                    path="/search-companies"
                    component={SearchCompaniesComponent}
                  />
                  <Route
                    path="/search-candidates"
                    component={CandidateSearchComponent}
                  />
                  <Route
                    path="/management-company"
                    component={AgencyManagementCompany}
                  />
                  <Route
                    path="/management-agency"
                    component={AgencyManagementAgency}
                  />
                  <Route
                    path="/management-candidate"
                    component={AgencyManagementCompany}
                  />
                  <Route path="/chat" component={ChatPageComponents} />
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
                '/reset-password',
                '/subscription-plans',
                '/register-as',
                '/success'
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
                    <Route
                      path="/subscription-plans"
                      component={Subscription}
                    />
                    <Route path="/register-as" component={RegisterAs} />
                    <Route path="/success" component={Success} />
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
