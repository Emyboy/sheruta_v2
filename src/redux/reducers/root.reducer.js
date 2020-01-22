import {
    combineReducers
} from 'redux';
import authReducer from './auth.reducer';
import apartmentReducer from './apartment.reducers';
import sharedReducer from './shared.reducer';

const rootReducer = combineReducers({
    apartment: apartmentReducer,
    shared: sharedReducer,
    auth: authReducer
});

export default rootReducer;
