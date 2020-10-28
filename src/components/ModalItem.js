import React from 'react';
import styled from 'styled-components';
import { AddButton } from './AddButton';

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
  margin-bottom: 20px;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 57px;
  margin-left: 37px;
`;

const Text = styled.p`
  font-family: Pacifico;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 53px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      console.log(e.target.id)
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ContentWrapper>
          <Text>{openItem.name}</Text>
          <Text>{openItem.price.toFixed(0)}₽</Text>
        </ContentWrapper>
        <AddButton />
      </Modal>
    </Overlay>
  )
};