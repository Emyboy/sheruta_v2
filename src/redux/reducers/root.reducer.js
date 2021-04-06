import {
    combineReducers
} from 'redux';
import authReducer from './auth.reducer';
import apartmentReducer from './apartment.reducers';
import sharedReducer from './shared.reducer';
import blogReducer from './blog.reducer';
import viewReducer from './view.reducer';
import userReducer from './user.reducer';
import pageReducer from './page.reducer';
import featuredReducer from './feature.reducer';
import agentReducer from './agent.reducer';

const rootReducer = combineReducers({
    apartment: apartmentReducer,
    shared: sharedReducer,
    auth: authReducer,
    blog: blogReducer,
    view: viewReducer,
    user: userReducer,
    page: pageReducer,
    featured: featuredReducer,
    agent: agentReducer
});

export default rootReducer;
