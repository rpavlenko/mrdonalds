import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 80px;
  background: #fff;
  width: 380px;
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

const EmptyList = styled.p`
  text-align: center;
`;


export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) => 
  totalPriceItems(order) + result
  , 0);

  const totalItems = orders.reduce((result, order) => order.count + result, 0);

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ:</OrderTitle>
      <OrderContent>
        { orders.length ? 
          <OrderList>
            {orders.map(order => <OrderListItem order={order} />)}
          </OrderList> :
          <EmptyList>Список заказов пуст</EmptyList> }
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalItems}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
  
}