import styled from 'styled-components';

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
