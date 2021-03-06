import React, { Component } from 'react';
import {Router,Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500 } from './views/Pages';

// import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import configureStore from './store';
import history from './history';

const store = configureStore();
console.log("localStorage",localStorage)


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('user_token') !== null
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <PrivateRoute 
           path="/" 
          component={DefaultLayout} 
          authed={localStorage.getItem('user_token') !== null} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
