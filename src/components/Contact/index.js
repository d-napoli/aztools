import React, { Component } from 'react';

import axios from 'axios';

import {
    Container,
    Row,
    Column,
    Image,
    Header,
    Title,
    Body,
    Input,
    TextArea,
    ErrorSpan,
    SucessSpan
} from './styles';

import imagePath from '../../images/aztools-mail.jpg';
import Button from '../Button';

const initialState = {
    fields: { name: '', email: '', description: '' },
    errors: {},
    isLoading: false,
    returnMessage: ''
    // formIsValid: true
}

class Callout extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)

        this.contactSubmit = this.contactSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleValidation(){
        let fields = this.state.fields;
        let formIsValid = true;
        let errors = {};

        //Name
        if(!fields["name"] || fields["name"] == ""){
           formIsValid = false;
           errors["name"] = "Oops! Acho que você esqueceu de preencher o seu nome";
        } else {
            if(!fields["name"].match(/[a-zA-Z]/)){
                formIsValid = false;
                errors["name"] = "Nomes contém apenas letras!";
            } else {
                if( fields["name"].length < 3 ) {
                    formIsValid = false;
                    errors["name"] = "Acho que você esqueceu algumas letras no seu nome...";
                }
            }
        }
   
        //Email
        if(!fields["email"] || fields["email"] == ""){
            formIsValid = false;
           errors["email"] = "Oops! Sem o seu e-mail não conseguimos lhe contatar!";
        } else {
            if(typeof fields["email"] !== "undefined"){
                let lastAtPos = fields["email"].lastIndexOf('@');
                let lastDotPos = fields["email"].lastIndexOf('.');
     
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                    formIsValid = false;
                   errors["email"] = "Hmm... Acho que esse e-mail não é válido";
                 }
            }
        }

        this.setState({errors: errors });
        return formIsValid;
   }

   contactSubmit(){
       if(this.handleValidation()) {
            this.setState({ isLoading: true });

            const post = {
                userName: this.state.fields['name'],
                userEmail: this.state.fields['email'],
                contactDescription: this.state.fields['description']
            } 
            
            axios.post('/api/new-contact.php', post)
            .then(response =>
                {
                    this.setState({ isLoading: false });

                    let resposta = response.data;
                    console.log(resposta);
                    let message = {};
                    
                    if(resposta == " Okay ") {
                        message = 'Mensagem enviada com sucesso!'
                    } else {
                        message = 'Oops! Tivemos um problema ao enviar a mensagem, tente mais tarde'
                    }

                    this.setState({ returnMessage: message });
                }
            );
       }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

	render() {
		return (
            <Container id="contact">
                <Row>
                    <Column>
                        <Image src={imagePath} />
                    </Column>
                    <Column>
                        <Header>
                            <Title>Entre em contato!</Title>
                        </Header>
                        <Body>
                            <Input
                                placeholder="Nome e Sobrenome"
                                ref="name"
                                type="text"
                                size="30"
                                onChange={this.handleChange.bind(this, "name")}
                                value={this.state.fields["name"]}
                            />
                            <ErrorSpan>{this.state.errors["name"]}</ErrorSpan>
                            <Input
                                placeholder="Seu melhor e-mail"
                                type="email"
                                ref="email"
                                size="30"
                                onChange={this.handleChange.bind(this, "email")}
                                value={this.state.fields["email"]}
                            />
                            <ErrorSpan>{this.state.errors["email"]}</ErrorSpan>
                            <TextArea
                                placeholder="Que tal nos contar um pouco mais da sua demanda?"
                                ref="description"
                                onChange={this.handleChange.bind(this, "description")}
                                value={this.state.fields["description"]}
                            />
                            <Button
                                solid
                                label={this.state.isLoading ? 'Enviando...' : 'Entrar em contato'}
                                click={this.contactSubmit}
                            />
                            {
                                !this.state.returnMessage != '' ? null :
                                    this.state.returnMessage == 'Mensagem enviada com sucesso!' ? 
                                        <SucessSpan>{this.state.returnMessage}</SucessSpan> :
                                        <ErrorSpan>{this.state.returnMessage}</ErrorSpan>
                            }
                        </Body>
                    </Column>
                </Row>
            </Container>
		);
	}
}

export default Callout;