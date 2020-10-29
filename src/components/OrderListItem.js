import React from 'react';
import styled from 'styled-components';
import bucketImage from '../image/bucket.svg';

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
  margin: 15px 0;
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

export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>JS Burger</ItemName>
    <span>2</span>
    <ItemPrice>750 ₽</ItemPrice>
    <BucketButton />
  </OrderItemStyled>
);

