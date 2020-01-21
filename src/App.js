import React from 'react';
import './css/colors.css';
import './css/nav.css';
import './css/plugins.css';
import './css/styles.css';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Submit from './components/Submit';
import PageNotFound from './components/PageNotFound';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className="App green-skin">
      <div className='core-content'>
        <div className='main-wrapper'>
          <div class="clearfix"></div>
          <BrowserRouter>
          <TopHeader />
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/submit" component={Submit} />
              <Route exact path="/details" component={Details} />
              <Route component={PageNotFound} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
