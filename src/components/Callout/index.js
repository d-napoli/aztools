import React, { Component } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

import {
    Container,
    TitleWrapper,
    Title,
    Description,
    MainImage,
    ImageWrapper,
    OnlyMobile,
    OnlyDesktop
} from './styles';

import imagePath from '../../images/aztools-callout.jpg';
import Button from '../Button';

class Callout extends Component {
	render() {
		return (
            <Container>
                <OnlyMobile>
                    <ImageWrapper>
                        <MainImage src={imagePath} />
                    </ImageWrapper>
                </OnlyMobile>
                <TitleWrapper>
                    <Title>Aumente sua produtividade com menos esforço</Title>
                    <Description>Entenda, <b>aprimore e automatize</b> seus processos visando uma <b>maior produtividade</b>. Estamos dispostos a fazer parte da sua trajetória.
                    </Description>
                    <Link
                        to='contact'
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button solid label="Entrar em Contato" />
                    </Link>
                </TitleWrapper>
                <OnlyDesktop>
                    <ImageWrapper>
                        <MainImage src={imagePath} />
                    </ImageWrapper>
                </OnlyDesktop>
            </Container>
		);
	}
}

export default Callout;