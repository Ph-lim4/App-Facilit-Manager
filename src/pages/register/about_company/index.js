import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../components/ui/inputs'
import Header from '../../../components/ui/header';

const about_company = (props) => {
  return (
    <Container>
      <Header title={"Sobre a Empresa"} onPress={() => props.navigation.navigate("Login")}/>
      <Input placeholder={"Nome da empresa"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Digite seu e-mail"} marginTop={13} type={"email-address"} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Digite sua senha"} marginTop={13} password onChangeText={text => console.log(text)}/>
      <Input placeholder={"Confirmar senha"} marginTop={13} password onChangeText={text => console.log(text)}/>
      <Footer height={372} onPress={() => props.navigation.navigate("Address")}/>
    </Container>
  );
}

export default about_company;