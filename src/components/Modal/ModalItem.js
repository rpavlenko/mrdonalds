import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
`;


const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 300px)
`;

const Text = styled.div`
  font-family: Pacifico;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 53px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      console.log(e.target.id)
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ContentWrapper>
          <Text>{openItem.name}</Text>
          <Text>{openItem.price}₽</Text>
        </ContentWrapper>
        <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
      </Modal>
    </Overlay>
  )
};