import styled, { keyframes } from 'styled-components';
import colors from '../../constants/colors';
import baseAnimation from "../../constants/baseAnimation";

const slideDown = keyframes`
    from{
        transform:translateY(-1060px);
    }
    to{
        transform:translateY(0);
    }
`;

const wooble = keyframes`
 0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
`;

const modalShow = keyframes`
  from{
    opacity: 0;
    transform:scaleY(0);
  }
  to{
    opacity: 1;
    transform:scaleY(1);
  }
`;

const fadeOut = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0;
  }
`

export const SlideDown = styled(baseAnimation)`
  animation-name: ${slideDown};
`;

export const Wooble = styled(baseAnimation)`
  animation-name: ${wooble};
`;

export const Container = styled.div`
  ${({ login }) => !login ? `
    height:100vh;
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
  ` : `
    opacity:0;
    position:fixed;
    z-index:-1;
  `}
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

export const ButtonOpenModal = styled.button`
   background-color:${colors.cardColor};
    width:246px;
    height:54px;
    border: 1px solid #D70900;
    border-radius:5px;
    color:#D70900;
    font-size:18px;
    font-weight:400;
    text-align:center;
    margin-bottom:-20px;
    cursor:pointer;
`;

export const Fade = styled.div`
  position: fixed;
  background: rgba(43, 46, 56, 0.932);
  bottom: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 1;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(baseAnimation)`
  background-color:white;
  width:500px;
  z-index: 999;
  border-radius:5px;
  animation-name: ${modalShow};
  overflow:hidden;

  div{
    padding:20px;
    font-size:18px;
    font-weight:400;
    color:#D70900;
    cursor:pointer;
    font-family:"Recursive", sans-serif;
    transition:background .2s, color .2s;
    
    &:hover{
      background-color:#FB6B6B;
      color:white;
    }

    &:first-child{
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }

    &:last-child{
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
    }
  }
`;