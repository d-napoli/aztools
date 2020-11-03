import React, { Component } from 'react';

import Icon from '../Icon';

import {
    Container,
    Header,
    IconWrapper,
    Body,
    Title,
    Description
} from './styles';

class Features extends Component {
	render() {
		return (
            <Container>
                <Header>
                    <IconWrapper>
                        <Icon icon={this.props.icon} size={this.props.iconSize} color="#ffffff" />
                    </IconWrapper>
                </Header>
                <Body>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                </Body>
            </Container>
		);
	}
}

export default Features