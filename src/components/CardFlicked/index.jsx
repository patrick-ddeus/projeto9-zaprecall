import React from 'react';
import Virar from "../../assets/Virar.svg";
import Button from "../Button";
import colors from '../../constants/colors';

import { Container, ButtonContainer} from './styles';

export default function CardFlicked ({ question, answer }) {
    const [step, setStep] = React.useState(1);

    return (step === 1 ?
        <Container>
            {question}
            <img src={Virar} alt="" onClick={() => setStep((previousState) => previousState + 1)} />
        </Container>
        :
        <Container>
            {answer}
            <ButtonContainer>
                <Button color={colors.danger}>Não lembrei</Button>
                <Button color={colors.warning}>Quase não lembrei</Button>
                <Button color={colors.success}>Zap!</Button>
            </ButtonContainer>
        </Container>
    );
}
