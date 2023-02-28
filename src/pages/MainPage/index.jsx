import React from 'react';
import Logo from "../../assets/logo.png";
import Card from '../../components/Card';

import * as S from './styles';
export default function MainPage () {
  return (
    <S.FadeIn duration="2s">
      <S.Container>
        <S.Title>
          <img src={Logo} alt="" />
          <h2>ZapRecall</h2>
        </S.Title>
        {}
      </S.Container>
    </S.FadeIn>
  );
}
