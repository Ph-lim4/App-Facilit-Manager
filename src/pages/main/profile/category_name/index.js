import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../../components/ui/inputs'
import Header from '../../../../components/ui/header';


const category_name = (props) => {
  return (
    <Container>
      <Header title={"Nome da Categoria"} onPress={() => props.navigation.navigate("Category")}/>
      <Input placeholder={"Telefone"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Footer height={530} onPress={() => props.navigation.navigate("Category")}/>
    </Container>
  );
}

export default category_name;