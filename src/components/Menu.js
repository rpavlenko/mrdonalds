import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import dbMenu from './DBMenu';

const MenuStyled = styled.main`
  margin-top: 80px;
  background-color: #ccc;
`;

const Section = styled.section`
  padding: 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
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