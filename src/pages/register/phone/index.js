import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../components/ui/inputs'
import Header from '../../../components/ui/header';

const phone = (props) => {
  return (
    <Container>
      <Header title={"Telefone"} onPress={() => props.navigation.navigate("Localization")}/>
      <Input placeholder={"Telefone"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Footer height={530} onPress={() => props.navigation.navigate("Phone_confirm")}/>
    </Container>
  );
}

export default phone;