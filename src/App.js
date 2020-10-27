
import React from 'react';

import { GlobalStyle } from './components/GlobalStyle';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { Banner } from './components/Banner';




function App() {
  return (

    <>
      <GlobalStyle />
      <Banner />
      <NavBar />
      <Menu />
    </>


  );
}

export default App;
