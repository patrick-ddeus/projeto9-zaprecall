import React from 'react';
import { Container } from './style';
import Play from "../../assets/seta_play.png"
export default function Card ({ indice, question, setQuestion}) {
    function handlePlayClick(){
        if(!question.includes(indice)){
            setQuestion([...question, indice])
          }
    
          console.log(question)
    }

    return (
        <Container>
            Pergunta {indice + 1}
            <img src={Play} alt="" onClick={handlePlayClick}/>
        </Container>
    );
}
