import React from 'react';
import './css/colors.css';
import './css/nav.css';
import './css/plugins.css';
import './css/styles.css';

import { Provider } from "react-redux";
import store from "./redux/store/store";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Submit from './components/Submit';
import PageNotFound from './components/PageNotFound';
import Details from './pages/Details/Details';
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

import 'antd/dist/antd.css';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';

function App() {
  return (
    <Provider store={store}>
      <div className="App green-skin">
        <div className='core-content'>
          <div className='main-wrapper'>
            <div className="clearfix"></div>
            <BrowserRouter>
              <TopHeader />
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/:username/submit" component={Submit} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/:username" component={Profile} />
                <Route exact path="/:type/:id" component={Details} />
                <Route component={PageNotFound} />
              </Switch>
            <Footer />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
