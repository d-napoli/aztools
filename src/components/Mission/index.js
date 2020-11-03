import React from 'react';

import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

import {
    Container,
    Row,
    Column,
    Info,
    Header,
    Body,
    Description,
    Title,
    IconWrapper,
    FullColumn,
    SectionTitle,
    SubTitle,
    SectionDescription
} from './styles';

const Mission = props => {
	return (
		<Container id="whoweare">
            <Row>
                <FullColumn>
                    <SectionTitle>Quem somos?</SectionTitle>
                    <SubTitle>Somos o time de automação digital que faltava no seu negócio</SubTitle>
                    <SectionDescription>Levamos tecnologia para dentro de empresas que procuram melhorar o desempenho dos seus mais variados processos.</SectionDescription>
                </FullColumn>
            </Row>
            <Row>
                <Column>
                    <Info>
                        <Header>
                            <IconWrapper>
                                <Icon icon={ICONS.MISSION} size="40" color="white" />
                            </IconWrapper>
                        </Header>
                        <Body>
                            <Title>Missão</Title>
                            <Description>Criar valor aos nossos clientes fornecendo soluções customizadas de automatização de processos, potencializando sua produtividade e confiabilidade das atividades fins.</Description>
                        </Body>
                    </Info>
                </Column>
                <Column>
                    <Info>
                        <Header>
                            <IconWrapper>
                                <Icon icon={ICONS.TARGET} size="40" color="white" />
                            </IconWrapper>
                        </Header>
                        <Body>
                            <Title>Visão</Title>
                            <Description>Ser referência em soluções automatizadas para empresas que buscam evolução em seus negócios.</Description>
                        </Body>
                    </Info>
                </Column>
                <Column>
                    <Info>
                        <Header>
                            <IconWrapper>
                                <Icon icon={ICONS.VALUES} size="40" color="white" />
                            </IconWrapper>
                        </Header>
                        <Body>
                            <Title>Valores</Title>
                            <Description>Transparência nas nossas relações, integridade a todo momento, respeito e prazer em resolver!</Description>
                        </Body>
                    </Info>
                </Column>
            </Row>
        </Container>
	);
}

export default Mission;