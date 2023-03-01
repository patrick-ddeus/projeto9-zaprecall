import React from 'react';
import { Container, ButtonStart, SlideDown, Wooble } from './styles';
import Logo from "../../assets/logo.png";
export default function WelcomePage ({ setLogin }) {
    return (
        <SlideDown duration="1s">
            <Container>
                <Wooble duration="2s" iterationCount="infinite">
                    <img src={Logo} alt="" />
                </Wooble>
                <h2>ZapRecall</h2>
                <ButtonStart onClick={() => setLogin((previousState) => !previousState)} data-test="start-btn">Iniciar Recall!</ButtonStart>
            </Container>
        </SlideDown>
    );
}
