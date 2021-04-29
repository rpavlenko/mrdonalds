
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
  apiKey: "AIzaSyB01MvciW4vkR9w06TSh7PcwtygWXV1nsE",
  authDomain: "mrdonalds-f83e9.firebaseapp.com",
  databaseURL: "https://mrdonalds-f83e9.firebaseio.com",
  projectId: "mrdonalds-f83e9",
  storageBucket: "mrdonalds-f83e9.appspot.com",
  messagingSenderId: "659286693271",
  appId: "1:659286693271:web:bba92c89fd1c0a3fd0a0d2"
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
      <Menu dbMenu={dbMenu} />
      { openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
