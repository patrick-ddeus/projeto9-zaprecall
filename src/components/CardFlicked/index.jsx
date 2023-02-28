import React from 'react';
import Card from '../Card';
import Virar from "../../assets/Virar.svg";
import colors from '../../constants/colors';

import { Container, ButtonContainer, ButtonWrapper} from './styles';

export default function CardFlicked ({indice, question, answer}) {
    const [step, setStep] = React.useState(1);
    const [resultado, setResultado] = React.useState("");

    function handleButtonClick(valueResult){
        setResultado(valueResult)
        setStep((previousState) => previousState + 1)
    }

    return (step === 1 ?
        <Container>
            {question}
            <img src={Virar} alt="" onClick={() => setStep((previousState) => previousState + 1)} />
        </Container>
        : step === 2 ?
        <Container>
            {answer}
            <ButtonContainer>
                <ButtonWrapper onClick={() => handleButtonClick("danger")} color={colors.danger}>Não lembrei</ButtonWrapper>
                <ButtonWrapper onClick={() => handleButtonClick("warning")} color={colors.warning}>Quase não lembrei</ButtonWrapper>
                <ButtonWrapper onClick={() => handleButtonClick("success")} color={colors.success}>Zap!</ButtonWrapper>
            </ButtonContainer>
        </Container>
        :
         <Card indice={indice} ending={true} resultado={resultado}></Card> 
    );
}
