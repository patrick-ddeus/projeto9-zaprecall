import styled, { keyframes } from 'styled-components';
import colors from '../../constants/colors';
import baseAnimation from "../../constants/baseAnimation"

const slideDown = keyframes`
    from{
        transform:translateY(-1060px);
    }
    to{
        transform:translateY(0);
    }
`

export const SlideDown = styled(baseAnimation)`
  animation-name: ${slideDown};
`;

export const Container = styled.div`
  height:80vh;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:30px;

  img{
    width:136px;
  }

  h2{
    font-family: "Righteous", sans-serif;
    font-size:36px;
    font-weight:400;
    color:white;
  }
`;

export const ButtonStart = styled.button`
    background-color:${colors.cardColor};
    width:246px;
    height:54px;
    border: 1px solid #D70900;
    border-radius:5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color:#D70900;
    font-size:18px;
    font-weight:400;
    font-family:"Recursive", sans-serif;
    cursor:pointer;
    transition:transform .2s ease-in;

    &:hover{
        transform:scale(1.1);
    }
`;