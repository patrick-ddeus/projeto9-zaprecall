import React from 'react';
import Logo from "../../assets/logo.png";
import Card from '../../components/Card';
import CardFlicked from '../../components/CardFlicked';
import CardsData from "../../data/cardData";

import * as S from './styles';
export default function MainPage () {
  const [question, setQuestion] = React.useState([]);

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
              <CardFlicked key={value.id} indice={index} question={value.question} answer={value.answer} />
          ))}
        </S.CardContainer>

      </S.Container>

      <S.Footer>
        {`${question.length}/${CardsData.length} Concluídos`}
      </S.Footer>
    </S.FadeIn>
  );
}
