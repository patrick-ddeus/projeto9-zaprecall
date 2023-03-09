import React from 'react';
import { Container, ButtonStart, SlideDown, Wooble, ButtonOpenModal, Modal, Fade } from './styles';
import Logo from "../../assets/logo.png";
import Options from '../../data/card.data';

export default function WelcomePage ({ login, setLogin, select, setSelect }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [buttonValue, setButtonValue] = React.useState("Selecione o Tema");

    function toggleModal () {
        setModalOpen(!modalOpen);
    }

    function handleOptionClick (e) {
        toggleModal();
        setSelect(e.currentTarget.value);
        setButtonValue(e.currentTarget.value);
    }

    function handleStartRecall(){
        if(buttonValue !== select){
           return alert("Selecione um tema!")
        }
        setLogin((previousState) => !previousState)
    }

    return (
        <SlideDown duration="1s">
            <Container login={login}>
                <Wooble duration="2s" iterationCount="infinite">
                    <img src={Logo} alt="" />
                </Wooble>
                <h2>ZapRecall</h2>
                <ButtonOpenModal onClick={toggleModal}>{buttonValue}</ButtonOpenModal>
                {modalOpen &&
                    <Fade onClick={toggleModal}>
                        <Modal value={select} >
                            {Object.keys(Options).map(optionValue => (
                                <option
                                    onClick={(e) => handleOptionClick(e)}
                                    value={optionValue}>{optionValue}</option>
                            ))}
                        </Modal>
                    </Fade>
                }
                <ButtonStart onClick={handleStartRecall} data-test="start-btn">Iniciar Recall!</ButtonStart>
            </Container>
        </SlideDown>
    );
}
