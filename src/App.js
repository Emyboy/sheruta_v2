import React, { Suspense } from 'react';
import './css/colors.css';
import './css/nav.css';
import './css/plugins.css';
import './css/styles.css';

import { Provider } from "react-redux";
import store from "./redux/store/store";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/Details/Details';
import './App.css';

import 'antd/dist/antd.css';
import PageLoader from './components/PageLoader';
// import SiteUnderConts from './components/SiteUnderConts';

// import Submit from './components/Submit';
// import PageNotFound from './components/PageNotFound';
// import Home from './pages/Home/Home';
// import SharedSignup from './pages/SharedSignup/SharedSignup';
// import About from './pages/About/About';
// import Profile from './pages/Profile/Profile';
// import SearchResults from './components/SearchResults';
// import BlogDetails from './pages/Blog/BlogDetails';


// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';
// import Contact from './pages/Contact/Contact';
// import Blog from './pages/Blog/Blog';

const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Signup = React.lazy(() => import('./pages/Signup/Signup'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const BlogDetails = React.lazy(() => import('./pages/Blog/BlogDetails'));
const SearchResults = React.lazy(() => import('./components/SearchResults'));
const Profile = React.lazy(() => import('./pages/Profile/Profile'));
const About = React.lazy(() => import('./pages/About/About'));
const SharedSignup = React.lazy(() => import('./pages/SharedSignup/SharedSignup'));
const Submit = React.lazy(() => import('./components/Submit'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));
const SharedList = React.lazy(() => import('./pages/SharedList/SharedList'));
const ApartmentList = React.lazy(() => import('./pages/ApartmentList/ApartmentList'));
// import SharedList from './pages/SharedList/SharedList';
// import ApartmentList from './pages/ApartmentList/ApartmentList';

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
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/shared" component={SharedList} />
                  <Route exact path="/apartments" component={ApartmentList} />
                  <Route exact path="/submit/:type" component={Submit} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/submit" component={Submit} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/:username" component={Profile} />
                  <Route exact path="/blog/:title" component={BlogDetails} />
                  <Route exact path="/shared/signup" component={SharedSignup} />
                  <Route exact path="/:type/:id" component={Details} />
                  <Route exact path="/search/:area/:bedrooms/:sittingrooms/:type/:price" component={SearchResults} />
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
