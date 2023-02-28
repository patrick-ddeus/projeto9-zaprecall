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
        <Container>
            <WordSpan resultado={resultado}>Pergunta {indice + 1}</WordSpan>
            {ending ?
            <img src={icons[resultado]} alt="" style={{width:"25px",cursor:"auto"}}/> : 
            <img src={Play} alt="" onClick={handlePlayClick} />}
        </Container>
    );
}
