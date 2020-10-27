import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import dbMenu from './DBMenu';

const MenuStyled = styled.main`
  background-color: #ccc;
`;

const Section = styled.section`
  padding: 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Section>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger}/>
    </Section>

    <Section>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </Section>
  </MenuStyled>
);