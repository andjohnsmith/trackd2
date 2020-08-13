import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Lists from './components/pages/Lists';
import Create from './components/pages/Create';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/tracklists" component={Lists} />
        <Route exact path="/create" component={Create} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
