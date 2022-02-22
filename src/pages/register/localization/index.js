import React from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../components/ui/inputs'
import Header from '../../../components/ui/header';

const localization = (props) => {
  return (
    <Container>
      <Header title={"Localização"} onPress={() => props.navigation.navigate("Address")}/>
      <Input placeholder={"(*Mapa*)"} marginTop={0} onChangeText={text => console.log(text)}/>
      <Footer height={530} onPress={() => props.navigation.navigate("Phone")}/>
    </Container>
  );
}

export default localization;