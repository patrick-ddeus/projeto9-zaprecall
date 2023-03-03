import React from 'react';
import { Container, ButtonStart, SlideDown, Wooble } from './styles';
import Logo from "../../assets/logo.png";
export default function WelcomePage ({ login, setLogin, select, setSelect}) {
    return (
        <SlideDown duration="1s">
            <Container login={login}>
                <Wooble duration="2s" iterationCount="infinite">
                    <img src={Logo} alt="" />
                </Wooble>
                <h2>ZapRecall</h2>
                <select value={select} onChange={(e) => setSelect(e.currentTarget.value)}>
                    <option value="default">Perguntas Padrões</option>
                    <option value="naruto">Naruto</option>
                    <option value="dragonball">Dragon Ball</option>
                </select>
                <ButtonStart onClick={() => setLogin((previousState) => !previousState)} data-test="start-btn">Iniciar Recall!</ButtonStart>
            </Container>
        </SlideDown>
    );
}
