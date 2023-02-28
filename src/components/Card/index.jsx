import React from 'react';
import { Container } from './style';
import Play from "../../assets/seta_play.png"
export default function Card ({ indice }) {
    return (
        <Container>
            Pergunta {indice}
            <img src={Play} alt="" />
        </Container>
    );
}
