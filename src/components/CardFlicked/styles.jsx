import styled, { keyframes } from 'styled-components';
import colors from '../../constants/colors';
import baseAnimation from "../../constants/baseAnimation";

const shrink = keyframes`
  from{
    min-height:0;
  }
  to{
    min-height:131px;
  }
`

const shrinkReverse = keyframes`
  from{
    min-height:100%;
  }
  to{
    min-height:65px;
  }
`

const flicker = keyframes`
    from{
        transform:rotateY(-180deg);
        opacity:0;
    }
    to{
        transform:rotateY(0);
        opacity:1;
    }
`

export const Flicker = styled(baseAnimation)`
    animation-name: ${flicker};
`

export const Shrink = styled(baseAnimation)`
    animation-name: ${shrink};
`

export const ShrinkReverse = styled(baseAnimation)`
    animation-name: ${shrinkReverse};
`

export const Container = styled.div`
    width:310px;
    background: ${colors.cardFlickedColor};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:10px;
    padding-bottom:60px;
    position:relative;
    backface-visibility: hidden;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    img{
        position:absolute;
        bottom:10px;
        right:10px;
        width:30px;
        cursor:pointer;
    }

`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom:10px;
    left:20px;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    gap:10px;
`;

export const ButtonWrapper = styled.button`
    width:85px;
    height:38px;
    border-radius:5px;
    background-color:${({ color }) => color};
    border:0;
    color:white;
    padding:0 10px;
    cursor:pointer;
    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;