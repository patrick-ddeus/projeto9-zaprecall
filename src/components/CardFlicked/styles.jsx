import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
    width:310px;
    min-height:131px;
    background: ${colors.cardFlickedColor};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:10px;
    padding-bottom:60px;
    position:relative;

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
    background-color:${({color}) => color};
    border:0;
    color:white;
    padding:0 10px;
    cursor:pointer;
    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`;