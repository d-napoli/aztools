import React from 'react';

import Feature from '../FeatureElement';
import { ICONS } from '../../constants/icons';

import {
	FeaturesContainer,
	FeaturesWrapper,
	Title,
	Description,
	Row,
	Column
} from './styles';

const Features = props => {
	return (
		<>	
        <FeaturesContainer id="features">
            <Title>Atuamos com...</Title>
            <Description>Todo o nosso processo é feito em conjunto com o cliente, procurando ter a melhor solução possível e que <strong>de fato</strong> atenda suas necessidades!</Description>
            <FeaturesWrapper>
                <Row>
                    <Column>
                        <Feature
                            icon={ICONS.EQUALIZE}
                            iconSize="40"
                            title="Padronização"
                            description="Automatizamos rotinas/processos rotineiros"
                        />
                    </Column>
                    <Column>
                        <Feature
                            icon={ICONS.TOOL}
                            iconSize="40"
                            title="Ferramentas"
                            description="Ferramentas customizadas para seu negócio"
                        />
                    </Column>
                    <Column>
                        <Feature
                            icon={ICONS.SMART}
                            iconSize="40"
                            title="Inteligência de Dados"
                            description="Transformarmos dados em informação objetivas"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Feature
                            icon={ICONS.REPORT}
                            iconSize="35"
                            title="Relatórios"
                            description="Criamos e Automatizamos relatórios"
                        />
                    </Column>
                    <Column>
                        <Feature
                            icon={ICONS.CHART}
                            iconSize="40"
                            title="Indicadores"
                            description="Construímos indicadores de performance/controle (KPIs)"
                        />
                    </Column>
                    <Column>
                        <Feature
                            icon={ICONS.DESKTOP}
                            iconSize="40"
                            title="Web"
                            description="Automatizamos processos web e sites"
                        />
                    </Column>
                </Row>
            </FeaturesWrapper>
        </FeaturesContainer>
		</>
	);
}

export default Features;