import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../components/ui/inputs'
import Header from '../../../components/ui/header';

const address = (props) => {
  return (
    <Container>
      <Header title={"Endereço"} onPress={() => props.navigation.navigate("About_company")}/>
      <Input placeholder={"Cep"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Cidade"} marginTop={13} onChangeText={text => console.log(text)}/>      
      <Input placeholder={"Estado"} marginTop={13} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Rua"} marginTop={13} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Bairro"} marginTop={13} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Número"} marginTop={13} onChangeText={text => console.log(text)}/>
      <Input placeholder={"Complemento"} marginTop={13} height={100} onChangeText={text => console.log(text)}/>
      <Footer height={250} onPress={() => props.navigation.navigate("Localization")}/>
    </Container>
  );
}

export default address;