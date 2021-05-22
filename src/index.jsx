import React from 'react';
import { render } from 'react-dom';
import { Footer } from './Footer/index';
import { Header } from './Header/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
