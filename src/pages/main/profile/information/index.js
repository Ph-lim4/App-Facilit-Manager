import React from 'react';
import { Container, Footer } from '../../styles';
import { Input } from '../../../../components/ui/inputs'
import Header from '../../../../components/ui/header';

const information = (props) => {
  return (
    <Container>
      <Header title={"Informações"} onPress={() => props.navigation.navigate("Login")}/>
      <Input placeholder={"Nome da empresa"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Telefone"} marginTop={13} password onChangeText={text => console.log(text)}/>
      <Input placeholder={"Confirmar senha"} marginTop={13} password onChangeText={text => console.log(text)}/>
      <Footer height={372} onPress={() => props.navigation.navigate("ProfileOverview")}/>
    </Container>
  );
}

export default information;