import React, { Suspense } from 'react';
import './css/colors.css';
import './css/nav.css';
import './css/plugins.css';
import './css/styles.css';
import 'react-activity/dist/react-activity.css';

import { Provider } from "react-redux";
import store from "./redux/store/store";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PageLoader from './components/PageLoader';
import Home2 from './pages/Home/Home2';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import 'antd/dist/antd.css';
import './App.css';
import PasswordReset from './pages/ResetPassword/PasswordReset';
import Request from './pages/Request/Request';
import RequestCategory from './pages/Request/CraeteRequest';
import RequestDetails from './pages/Request/RequestDetails';
import Profile2 from './pages/Profile/Profile2';

const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Signup = React.lazy(() => import('./pages/Signup/Signup'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const SearchResults = React.lazy(() => import('./components/SearchResults'));
const About = React.lazy(() => import('./pages/About/About'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));
const SignUpSuccess = React.lazy(() => import('./pages/SignUpSuccess/SignUpSuccess'));
const PropertyDetails = React.lazy(() => import('./pages/Property/PropertyDetails'));
const ResetPasswordRequest = React.lazy(() => import('./pages/ResetPassword/ResetPasswordRequest'));


function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Provider store={store}>
        <div className="App green-skin">
          <div className='core-content'>
            <div className='main-wrapper'>
              <div className="clearfix"></div>
              <BrowserRouter>
                <TopHeader />
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home2} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/signup/success" component={SignUpSuccess} />
                  {/* -------  REQUESTS ------ */}
                  <Route exact path="/requests" component={Request} />
                  <Route exact path="/requests/create" component={RequestCategory} />
                  <Route exact path="/request/:uid/:user_id" component={RequestDetails} />
                  <Route exact path="/email/activate/:token/:confirmationToken" component={VerifyEmail} />
                  <Route exact path="/property/:name/:property_id" component={PropertyDetails} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/profile" component={Profile2} />
                  <Route exact path="/password/reset/request" component={ResetPasswordRequest} />
                  <Route exact path="/password/reset/u/:token/:resetPasswordToken" component={PasswordReset} />
                  <Route exact path="/search/:category/:location/:service" component={SearchResults} />
                  <Route component={PageNotFound} />
                  {/* <Route component={SiteUnderConts} /> */}
                </Switch>
                <Footer />
              </BrowserRouter>
            </div>
          </div>
        </div>
      </Provider>
    </Suspense>
  );
}

export default App;
