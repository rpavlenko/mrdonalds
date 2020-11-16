
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
import { useTitle } from './components/Hooks/useTitle';
import { useDB } from './components/Hooks/useDB';
import { OrderConfirm } from './components/Order/OrderConfirm';
import { useOrderConfirm } from './components/Hooks/useOrderConfirm';
import { Context } from './components/Functions/context';


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
  const database = firebase.database();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem)
  const dbMenu = useDB(database);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      database
    }}>
      <GlobalStyle />
      <NavBar />
      <Order 
        database={database}
      />
      <Menu dbMenu={dbMenu}/>
      { openItem.openItem && <ModalItem /> }
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
