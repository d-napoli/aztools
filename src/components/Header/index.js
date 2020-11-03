import React, { Component } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

import axios from 'axios';

import { MENU } from '../../constants/menu';

import Button from '../Button';

import Logo from '../Static/LogoSmall';
import BurguerMenu from '../BurgerMenu';

import {
    BackToTop,
    Container,
    Wrapper,
    LinksWrapper,
    LinksWrapperMobile,
    NavLink,
    Ad,
    AdBody,
    AdHeader,
    AdTitle,
    AdDescription,
    AdCta,
    Close
} from './styles';

const initialState = {
    burguerActive: false,
    rolledPosition: false,
    showCTA: false
}

class Header extends Component {
    state = { ...initialState }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }

    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const currentToggle = this.state.burguerActive;
        this.setState({ burguerActive: !currentToggle });
    }

    removeModal() {
        const currentCTA = this.state.showCTA;
        this.setState({ showCTA: !currentCTA });
    }

    handleScroll() {
        if(document.documentElement.scrollTop > 400) {
            this.setState({
                rolledPosition: true
            })
        } else {
            this.setState({
                rolledPosition: false
            })
        }
    }

	render() {
        return (
            <>
            <div id="header"></div>
            <Container>
                {
                    !this.state.rolledPosition ? null :
                    !this.state.showCTA ? null :
                    <Ad>
                        <AdHeader>
                            <Button
                                label="X"
                                solid
                                click={this.removeModal}
                            />
                            <AdTitle>ORÇAMENTO GRATUITO!</AdTitle>
                        </AdHeader>
                        <AdBody>
                            <AdDescription>Não pedimos dados de cartão de crédito</AdDescription>
                            {/* <AdCta>Lorem Ipsum</AdCta> */}
                        </AdBody>
                    </Ad>
                }
                {
                    !this.state.rolledPosition ? null :
                    <Link
                        to='header'
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <BackToTop>
                            Voltar ao topo
                        </BackToTop>
                    </Link>
                }
                <Wrapper>
                    <Logo />
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
                    <BurguerMenu click={this.toggleMenu} />
                </Wrapper>
                <LinksWrapperMobile
                    style={{ display: this.state.burguerActive ? '' : 'none' }}
                >
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
                                onClick={this.toggleMenu}
                            >
                                <NavLink>
                                    {menu.name}
                                </NavLink>
                            </Link>
                        )
                    }
                </LinksWrapperMobile>
            </Container>
            </>
        );
    }
}

export default Header;