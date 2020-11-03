import React from 'react';

import Logo from '../../../images/logo-extra-small-white.png';

import {
    LogoImage
} from './styles';

const LogoSmall = props => {
	return (
		<LogoImage src={Logo} alt="Aztools logo" />
	);
}

export default LogoSmall;