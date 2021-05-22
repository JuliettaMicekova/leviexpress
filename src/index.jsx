import React from 'react';
import { render } from 'react-dom';
import { Footer } from './Footer/index';
import { Header } from './Header/index';
import { Home } from './Home/index';
import { Reservation } from './Reservation/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
