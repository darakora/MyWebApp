import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs /> */}
    <Laurels />
    <Gallery />
    <Chef />
    <Intro />
    <SpecialMenu />
    <FindUs />
    <Footer />
  </div>
);

export default App;
