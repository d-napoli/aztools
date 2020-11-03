import React from 'react';

import Header from '../Header';
import Callout from '../Callout';
import Features from '../Features';
import Providing from '../Providing';
import HowWeWork from '../HowWeWork';
import Footer from '../Footer';
import Mission from '../Mission';
import Contact from '../Contact';

import {
	Container
} from './styles';

const Layout = props => {
	return (
		<>	
			<Header />	
			<Container>
				<Callout />
				<Features />
				<Providing />
				<HowWeWork />
				<Mission />
				<Contact />
			</Container>
			<Footer />
		</>
	);
}

export default Layout;