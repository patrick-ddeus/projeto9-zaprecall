import styled, { keyframes } from "styled-components";
import baseAnimation from "../../constants/baseAnimation"

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`

export const FadeIn = styled(baseAnimation)`
  animation-name: ${fadeIn};
`;

export const Container = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
`;

export const Title = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    margin-top:48px;
    margin-bottom:20px;

    img{
        width:52px;
    }

    h2{
        font-family:"Righteous";
        font-weight:400;
        font-size:36px;
        color:white;
    }
`;

export const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;
`;