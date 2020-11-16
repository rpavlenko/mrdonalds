import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
// import { useFetch } from '../Hooks/useFetch';
import Spinner from '../Styled/Spinner';

const MenuStyled = styled.main`
  margin-top: 80px;
  margin-left: 380px;
  background-color: #ccc;
`;

const Section = styled.section`
  padding: 30px;
`;

export const Menu = ({ dbMenu }) => {
  // const res = useFetch();

  // const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      { dbMenu ? 
      <>
        <Section>
          <h2>Бургеры</h2>
          <ListItem
            itemList={dbMenu.burger}
          />
        </Section>

        <Section>
          <h2>Закуски / Напитки</h2>
          <ListItem
            itemList={dbMenu.other}
          />
        </Section>
      </> : 
        <Spinner />
      }
    </MenuStyled>
  )
};