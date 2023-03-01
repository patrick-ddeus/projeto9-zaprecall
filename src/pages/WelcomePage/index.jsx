import React from 'react';
import { Container, ButtonStart, SlideDown } from './styles';
import Logo from "../../assets/logo.png";
export default function WelcomePage ({ setLogin }) {
    return (
        <SlideDown duration="1s">
            <Container>
                <img src={Logo} alt="" />
                <h2>ZapRecall</h2>
                <ButtonStart onClick={() => setLogin((previousState) => !previousState)} data-test="start-btn">Iniciar Recall!</ButtonStart>
            </Container>
        </SlideDown>
    );
}
