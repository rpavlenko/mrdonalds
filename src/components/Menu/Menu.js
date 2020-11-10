import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import Spinner from '../Styled/Spinner';

const MenuStyled = styled.main`
  margin-top: 80px;
  margin-left: 380px;
  background-color: #ccc;
`;

const Section = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => {
  const res = useFetch();

  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      { res.response ? 
      <>
        <Section>
          <h2>Бургеры</h2>
          <ListItem
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
          />
        </Section>

        <Section>
          <h2>Закуски / Напитки</h2>
          <ListItem
            itemList={dbMenu.other}
            setOpenItem={setOpenItem}
          />
        </Section>
      </> : res.error ? 
      <div>Sorry, we will fix it</div> : 
        <Spinner />
      }
    </MenuStyled>
  )
};