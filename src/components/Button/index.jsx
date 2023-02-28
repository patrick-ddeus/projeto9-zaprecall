import React from 'react'
import { ButtonWrapper } from './styles'

export default function Button({children, color}) {
  return (
    <ButtonWrapper color={color}>
        {children}
    </ButtonWrapper>
  )
}
