import React from 'react';
import Logo from "../../assets/logo.png";
import Card from '../../components/Card';
import CardFlicked from '../../components/CardFlicked';
import ResultMessage from '../../components/ResultMessage';
import CardsData from "../../data/cardData";
import Party from "../../assets/party.png"
import Sad from "../../assets/sad.png"

import * as S from './styles';
export default function MainPage () {
  const [question, setQuestion] = React.useState([]);
  const [doneQuestions, setDoneQuestions] = React.useState(0);
  const [doneIcons, setDoneIcons] = React.useState([]);

  const existingDanger = doneIcons.find(icon => icon.name === "danger");

  return (
    <S.FadeIn duration="2s">
      <S.Container>

        <S.Title>
          <img src={Logo} alt="" />
          <h2>ZapRecall</h2>
        </S.Title>

        <S.CardContainer>
          {CardsData.map((value, index) => (
            !question.includes(index) ?
              <Card key={value.id} indice={index} question={question} setQuestion={setQuestion} ></Card> :
              <CardFlicked
                doneIcons={doneIcons}
                setDoneIcons={setDoneIcons}
                setDoneQuestions={setDoneQuestions}
                key={value.id}
                indice={index}
                question={value.question}
                answer={value.answer} />
          ))}
        </S.CardContainer>

      </S.Container>

      <S.Footer data-test="footer">
        {
         (doneQuestions === CardsData.length) ?
         existingDanger ? 

         <ResultMessage 
         emoji={Sad} 
         happy={false} 
         message={"Ainda faltam alguns... Mas não desanime!"}/> :

         <ResultMessage 
         emoji={Party} 
         happy={true} 
         message={"Você não esqueceu de nenhum flashcard!"}/>  : ""
        }
         <br/>
        {`${doneQuestions}/${CardsData.length} Concluídos`}
        <div>
          {doneIcons.map((icons, index) => (
            <img key={index} src={icons.src} alt="Algo" data-test={icons.name === "success" ? "zap-icon" : icons.name === "danger" ? "no-icon" : "partial-icon"}/>
          ))}
        </div>
      </S.Footer>
    </S.FadeIn>
  );
}
