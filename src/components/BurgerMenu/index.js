import React from 'react';

import {
    Container
} from './styles';

const BurgerMenu = props => {
	return (
		<Container onClick={e => props.click && props.click(props.label)}>
            <div></div>
            <div></div>
            <div></div>
        </Container>
	);
}

export default BurgerMenu;