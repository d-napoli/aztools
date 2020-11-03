import React from 'react';

import {
    Container,
    LeftSide,
    ImageWrapper,
    Image,
    RightSide,
    Heading,
    Title,
    List,
    ItemList,
    Description,
    DesktopOnly,
    MobileOnly
} from './styles';

import ImageSrc from '../../images/aztools-how-we-work-medium.jpg';

const HowWeWork = props => {
	return (
		<Container id="howwework">
            <MobileOnly>
                <ImageWrapper>
                    <Image src={ImageSrc} />
                </ImageWrapper>
            </MobileOnly>
            <LeftSide>
                <Heading>
                    <Title>Como trabalhamos</Title>
                    <List>
                        <ItemList>
                            1. Conhecemos o processo do cliente
                        </ItemList>
                        <ItemList>
                            2. Entendemos a necessidade central e possibilidade de ganhos
                        </ItemList>
                        <ItemList>
                            3. Apresentamos a solução 
                        </ItemList>
                        <ItemList>
                            4. Testes e implementação em ambiente controlado
                        </ItemList>
                        <ItemList>
                            5. Manutenção e suporte ativo (caso necessário)
                        </ItemList>
                    </List>
                </Heading>
            </LeftSide>
            <RightSide>
                <DesktopOnly>
                    <ImageWrapper>
                        <Image src={ImageSrc} />
                    </ImageWrapper>
                </DesktopOnly>
            </RightSide>
        </Container>
	);
}

export default HowWeWork;