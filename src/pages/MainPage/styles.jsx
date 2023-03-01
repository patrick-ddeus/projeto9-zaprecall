import styled, { keyframes } from "styled-components";
import baseAnimation from "../../constants/baseAnimation";

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const flicker = keyframes`
  from{
    transform: rotateY(-180deg);
  }
  to{
    transform:rotateY(0)
  }
`

export const FadeIn = styled(baseAnimation)`
  animation-name: ${fadeIn};
`;

export const Flicker = styled(baseAnimation)`
  animation-name: ${flicker};
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

export const Footer = styled.footer`
  width:100%;
  height:70px;
  background-color: white;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  text-align:center;
  margin-top:46px;
  position:sticky;
  bottom:0;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:5px;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  img{
    display:inline;
    margin:0 2px;
  }
`;

export const IconsWrapper = styled.div`
  
`;