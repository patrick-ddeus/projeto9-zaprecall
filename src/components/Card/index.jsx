import React from 'react';
import Play from "../../assets/seta_play.png";
import icons from '../../constants/icons';

import { Container, WordSpan} from './style';

export default function Card ({ indice, question, setQuestion, ending, resultado }) {
    function handlePlayClick () {
        if (!question.includes(indice)) {
            setQuestion([...question, indice]);
        }
    }

    return (
        <Container data-test="flashcard">
            <WordSpan resultado={resultado} data-test="flashcard-text">Pergunta {indice + 1}</WordSpan>
            {ending ?
            <img src={icons[resultado]} data-test={resultado === "success" ? "zap-icon" : resultado === "danger" ? "no-icon" : "partial-icon"} alt="" style={{width:"25px",cursor:"auto"}}/> : 
            <img src={Play} alt="" onClick={handlePlayClick} data-test="play-btn"/>}
        </Container>
    );
}
