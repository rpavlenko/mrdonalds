import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
font-size: 24px;
margin-left: 15px`;

const ImgLogo = styled.img`
  width: 50px
`;

const ImgSign = styled.img`
  margin-bottom: 5px;
  width: 32px;
  height: 32px;
`;

const Login = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: transparent;

  :hover {
    transition: 0.2s;
    color: darkgreen;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = () => {
  const { auth: { authentication, logIn, logOut} } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ?
        <User>
          <Figure>
            <ImgSign src={signImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User> :
        <Login onClick={logIn}>
          <Figure>
            <ImgSign src={signImg} alt="войти" />
            <figcaption>войти</figcaption>
          </Figure>
        </Login>}
    </NavBarStyled>
  )
};