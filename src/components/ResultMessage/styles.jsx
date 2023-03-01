import styled from 'styled-components';
import color from '../../constants/colors';

export const CongratContainer = styled.div`
    display:flex;
    justify-content: center;
    gap:5px;
    font-weight: 700;
    color:${color.fontColor};
    margin-bottom:10px;
`;

export const Message = styled.p`
  width:222px;
  margin:10px auto;
`;