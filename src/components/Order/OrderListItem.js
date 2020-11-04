import React from 'react';
import styled from 'styled-components';
import bucketImage from '../../image/bucket.svg';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  margin-bottom: px;
`;

const BucketButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${bucketImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor-pointer;
`;

const Topping = styled.div`
  padding-left: 10px;
  margin-top: 0px;
  width: 100%;
  font-size: 14px;
  color: #9A9A9A;
`;

export const OrderListItem = ({ order, deleteItem }) => {
  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <>
  <OrderItemStyled>
    <ItemName>{order.name} {order.choice}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <BucketButton onClick={deleteItem}/>
  </OrderItemStyled>
  {topping && <Topping>Допы: {topping}</Topping>}
  </>
)};

