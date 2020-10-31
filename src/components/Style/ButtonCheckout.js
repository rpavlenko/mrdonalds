import styled from 'styled-components';


export const ButtonCheckout = styled.button`
  display: block;
  margin: auto;
  padding: 20px 80px;
  background-color: #299B01;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  border-color: transparent;
  cursor: pointer;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
`;