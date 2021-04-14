import { useRef, useContext } from 'react';
import styled from 'styled-components';
import bucketImage from '../../image/bucket.svg';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

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
  cursor: pointer;
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

const Choices = styled.div`
  padding-left: 10px;
  margin-top: 0px;
  width: 100%;
  font-size: 14px;
  color: #9A9A9A;
`;


export const OrderListItem = ({ order, index, deleteItem }) => {
  const { openItem: { setOpenItem }} = useContext(Context);

  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  const refDeleteButton = useRef(null);

  return (
    <>
      <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
    <ItemName>
      {order.name} 
      <Choices>{order.choice}</Choices>
    </ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <BucketButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
  </OrderItemStyled>
  {topping && <Topping>Допы: {topping}</Topping>}
  </>
)};

