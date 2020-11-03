import React from 'react';

import Logo from '../Static/LogoSmallWhite';
import Icon from '../Icon';
import { ICONS } from '../../constants/icons';
import { MENU } from '../../constants/menu';

import { Link, animateScroll as scroll } from "react-scroll";

import {
    Container,
    Row,
    LeftColumn,
    CenterColumn,
    RightColumn,
    Description,
    CompanyDescription,
    IconsWrapper,
    // Icon,
    SocialMediaWrapper,
    IconWrapper,
    FooterTitle,
    Phone,
    Mail,
    LinksWrapper,
    NavLink
} from './styles';

const Footer = props => {
	return (
		<Container>
            <Row>
                <LeftColumn>
                    <Logo />
                    <SocialMediaWrapper>
                        <IconWrapper>{/** Linkedin */}
                            <Icon icon={ICONS.INSTAGRAM} color="white" size="25" />
                        </IconWrapper>
                        <IconWrapper>{/** Instagram */}
                            <Icon icon={ICONS.LINKEDIN} color="white" size="25" />
                        </IconWrapper>
                    </SocialMediaWrapper>
                    <CompanyDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac laoreet augue, ut tincidunt augue. Vestibulum quis ornare lectus.</CompanyDescription>
                    <IconsWrapper>
                        <Mail>
                            <IconWrapper>{/* Email */}
                                <Icon icon={ICONS.MAIL} color="white" size="20" />
                            </IconWrapper>
                            <Description>contato@aztools.com.br</Description>
                        </Mail>
                    </IconsWrapper>
                </LeftColumn> 
                <CenterColumn>
                    <FooterTitle>Links rápidos</FooterTitle>
                    <LinksWrapper>
                    {
                        MENU.menu.map((menu, index) =>
                            <Link
                                key={menu.id}
                                activeClass="active"
                                to={menu.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <NavLink>
                                    {menu.name}
                                </NavLink>
                            </Link>
                        )
                    }
                    </LinksWrapper>
                </CenterColumn>
                <RightColumn>
                </RightColumn>
            </Row>
        </Container>
	);
}

export default Footer;