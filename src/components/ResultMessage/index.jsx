import React from 'react'
import Party from "../../assets/party.png";
import Sad from "../../assets/sad.png";

import * as S from './styles'

export default function ResultMessage({message, happy}) {
  return (
    <div data-test="finish-text">
        <S.CongratContainer>
            <img src={happy ? Party : Sad} alt="" />
            {happy ? "Parabéns" : "Putz..."}
        </S.CongratContainer>
        <S.Message>{message}</S.Message>
    </div>
  )
}
