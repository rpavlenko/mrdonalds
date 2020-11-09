
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyD2bhEhu2P3QfhlZEdNFUzAQWNGqtyps6A",
  authDomain: "mrdonalds-f82bf.firebaseapp.com",
  databaseURL: "https://mrdonalds-f82bf.firebaseio.com",
  projectId: "mrdonalds-f82bf",
  storageBucket: "mrdonalds-f82bf.appspot.com",
  messagingSenderId: "499171320832",
  appId: "1:499171320832:web:5fd1a8d454b2d421f664e5"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order 
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
