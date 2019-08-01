import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const SignIn = React.lazy(() => import('./SignIn'));
const SignUp = React.lazy(() => import('./SignUp'));


class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/SignIn" name="SignIn" render={props => <SignIn {...props}/>} />
              <Route exact path="/SignUp" name="Register Page" render={props => <SignUp {...props}/>} />
            {/*  <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />*/}
              <Route path="/" name="SignIn" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
          </BrowserRouter>
    
    );
  }
}

export default App;
