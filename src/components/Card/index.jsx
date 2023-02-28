import React from 'react';
import { Container } from './style';
import Play from "../../assets/seta_play.png";
import icons from '../../constants/icons';

export default function Card ({ indice, question, setQuestion, ending, resultado }) {
    function handlePlayClick () {
        if (!question.includes(indice)) {
            setQuestion([...question, indice]);
        }
    }

    return (
        <Container>
            Pergunta {indice + 1}
            {ending ?
            <img src={icons[resultado]} alt="" style={{width:"25px",cursor:"auto"}}/> : 
            <img src={Play} alt="" onClick={handlePlayClick} />}
        </Container>
    );
}
