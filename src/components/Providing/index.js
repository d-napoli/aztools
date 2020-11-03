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
    IconBox
} from './styles';

import ImageSrc from '../../images/aztools-gains-medium.jpg';
import { ICONS } from '../../constants/icons';
import { THEMES } from '../../constants/themes';
import Icon from '../Icon';

const Providing = props => {
	return (
		<Container>
            <LeftSide>
                <ImageWrapper>
                    <Image src={ImageSrc} />
                </ImageWrapper>
            </LeftSide>
            <RightSide>
                <Heading>
                    <Title>Proporcionamos</Title>
                    <List>
                        <ItemList>
                            <IconBox>
                                <Icon icon={ICONS.CHECK} color={THEMES.primary} size="20" />
                            </IconBox>
                            Otimização do tempo de trabalho
                        </ItemList>
                        <ItemList>
                            <IconBox>
                                <Icon icon={ICONS.CHECK} color={THEMES.primary} size="20" />
                            </IconBox>
                            Ganhos em produtividade
                        </ItemList>
                        <ItemList>
                            <IconBox>
                                <Icon icon={ICONS.CHECK} color={THEMES.primary} size="20" />
                            </IconBox>
                            Confiabilidade nos processos
                        </ItemList>
                        <ItemList>
                            <IconBox>
                                <Icon icon={ICONS.CHECK} color={THEMES.primary} size="20" />
                            </IconBox>
                            Redução da possibilidade de falhas/erros
                        </ItemList>
                    </List>
                </Heading>
            </RightSide>
        </Container>
	);
}

export default Providing;