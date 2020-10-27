import React from 'react';
import styled from 'styled-components';
import baner from '../image/banner.png';

const BannerImg = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 210px;
  background: url(${baner}) no-repeat center center / cover;
`;

export const Banner = () => (
  <BannerImg>

  </BannerImg>
)