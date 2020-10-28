
import React from 'react';

import { GlobalStyle } from './components/GlobalStyle';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { ModalItem } from './components/ModalItem';




function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (

    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>


  );
}

export default App;
