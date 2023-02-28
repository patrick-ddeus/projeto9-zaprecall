import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
    background-color:${colors.cardColor};
    width:310px;
    height:65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;

    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size:16px;
    color:${colors.fontColor};

    img{
        width:20px;
        height:23px;
        cursor:pointer;
    }
`;
