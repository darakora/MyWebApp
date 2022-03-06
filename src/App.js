import React from 'react';

import { Motivation, FindUs, Footer, Gallery, Header, Intro, AboutUs, Price } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <Motivation />
    <Intro />
    <Price />
    <FindUs />
    <Footer />
  </div>
);

export default App;
