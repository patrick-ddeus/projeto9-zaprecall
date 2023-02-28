import React from 'react';
import Virar from "../../assets/Virar.svg"

import { Container } from './styles';

export default function CardFlicked ({ question, answer}) {
    const [step, setStep] = React.useState(1)

    return ( step === 1 ?
        <Container>
            {question}
            <img src={Virar} alt="" onClick={() => setStep((previousState) => previousState + 1)}/>
        </Container>
        : 
        <Container>
            {answer}
            
        </Container>
    );
}
