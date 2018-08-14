import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  graphs: graphReducer,
  products: productReducer
});

export default rootReducer;
