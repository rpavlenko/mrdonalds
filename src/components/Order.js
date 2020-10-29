import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 80px;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;


const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;


export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ:</OrderTitle>
      <OrderContent>
        <OrderList>
          <OrderListItem />
        </OrderList>
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>850 ₽</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
  
}