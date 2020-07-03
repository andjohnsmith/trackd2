import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
