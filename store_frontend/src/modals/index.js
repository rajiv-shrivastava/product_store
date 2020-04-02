import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  graphs: graphReducer,
  product: productReducer,
  auth: authReducer,
  form: formReducer

});

export default rootReducer;
