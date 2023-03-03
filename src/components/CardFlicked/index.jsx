import React from 'react';
import Card from '../Card';
import Virar from "../../assets/Virar.svg";
import colors from '../../constants/colors';
import icons from '../../constants/icons';

import { Container, ButtonContainer, ButtonWrapper } from './styles';

export default function CardFlicked ({ doneIcons, setDoneIcons, setDoneQuestions, indice, question, answer }) {
    const [step, setStep] = React.useState(1);
    const [resultado, setResultado] = React.useState("");

    function handleButtonClick (valueResult) {
        setResultado(valueResult);
        setStep((previousState) => previousState + 1);
        setDoneQuestions((previousState) => previousState + 1);
        setDoneIcons([...doneIcons, { src: icons[valueResult], name: valueResult }]);
    }

    return (step === 1 ?
        <Container>
            <span data-test="flashcard-text">{step === 1 ? question : answer}</span>
            <img src={Virar} alt="" onClick={() => setStep((previousState) => previousState + 1)} data-test="turn-btn" />
        </Container>
        : step === 2 ?
            <Container>
                <span data-test="flashcard-text">{answer}</span>
                <ButtonContainer>
                    <ButtonWrapper data-test="no-btn" onClick={() => handleButtonClick("danger")} color={colors.danger}>Não lembrei</ButtonWrapper>
                    <ButtonWrapper data-test="partial-btn" onClick={() => handleButtonClick("warning")} color={colors.warning}>Quase não lembrei</ButtonWrapper>
                    <ButtonWrapper data-test="zap-btn" onClick={() => handleButtonClick("success")} color={colors.success}>Zap!</ButtonWrapper>
                </ButtonContainer>
            </Container>
            :
            <Card indice={indice} ending={true} resultado={resultado}></Card>
    );
}
