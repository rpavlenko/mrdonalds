import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  display: block;
  margin: auto;
  padding: 20px 80px;
  margin-top: 222px;
  background: #299B01;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  border: 0;
  cursor: pointer;
`;

export const AddButton = () => (
  <Button>Добавить</Button>
);