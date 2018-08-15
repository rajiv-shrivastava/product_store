import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  graphs: graphReducer,
  products: productReducer,
  auth: authReducer
});

export default rootReducer;
