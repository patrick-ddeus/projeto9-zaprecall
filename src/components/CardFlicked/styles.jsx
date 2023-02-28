import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
    width:310px;
    height:131px;
    background: ${colors.cardFlickedColor};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding:10px;
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
