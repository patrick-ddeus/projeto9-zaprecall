import React from 'react'
import * as S from './styles'

export default function ResultMessage({emoji, message, happy}) {
  return (
    <div data-test="finish-text">
        <S.CongratContainer>
            <img src={emoji} alt="" />
            {happy ? "Parabéns" : "Putz..."}
        </S.CongratContainer>
        <S.Message>{message}</S.Message>
    </div>
  )
}
