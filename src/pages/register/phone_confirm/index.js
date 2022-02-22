import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../components/ui/inputs'
import Header from '../../../components/ui/header';

const phone_confirm = (props) => {
  return (
    <Container>
      <Header title={"Confirmação de Telefone"} onPress={() => props.navigation.navigate("Phone")}/>
      <Input placeholder={"Código"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Footer height={530} onPress={() => props.navigation.navigate("Tags")}/>
    </Container>
  );
}

export default phone_confirm;