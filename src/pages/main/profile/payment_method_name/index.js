import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../../components/ui/inputs'
import Header from '../../../../components/ui/header';


const payment_method_name = (props) => {
  return (
    <Container>
      <Header title={"Nome da Categoria"} onPress={() => props.navigation.navigate("Category")}/>
      {/** Precisa de um limite de 20 caracteres */}
      <Input placeholder={"Nome da categoria"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Footer height={530} onPress={() => props.navigation.navigate("Category")}/>
    </Container>
  );
}

export default payment_method_name;