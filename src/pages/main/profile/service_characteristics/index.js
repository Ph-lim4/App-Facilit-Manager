import React, { useState } from 'react';
import { Container, Footer } from '../styles';
import { Input } from '../../../../components/ui/inputs'
import Header from '../../../../components/ui/header';
import { Picker } from '@react-native-picker/picker';
import { w } from '../../../../components/dimens';
import { View } from '../../../../components/ui/inputs/styles';

const service_characteristics = (props) => {
  const [selectedDuration, setSelectedDuration] = useState();
  return (
    <Container>
      <Header title={"Nome do serviço"} onPress={() => props.navigation.navigate("Service")} />
      <Input placeholder={"Nome do serviço"} marginTop={0} onChangeText={text => console.log(text)} />
      <View marginTop={13}>
        <Picker
          style={{ flex: 1 }}
          selectedValue={selectedDuration}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDuration(itemValue)
          }>
          <Picker.Item label="5 minutos" value="5" />
          <Picker.Item label="10 minutos" value="10" />
          <Picker.Item label="15 minutos" value="15" />
          <Picker.Item label="20 minutos" value="20" />
          <Picker.Item label="25 minutos" value="25" />
          <Picker.Item label="30 minutos" value="30" />
          <Picker.Item label="40 minutos" value="40" />
          <Picker.Item label="50 minutos" value="50" />
          <Picker.Item label="60 minutos (1h00)" value="60" />
          <Picker.Item label="90 minutos (1h30)" value="90" />
          <Picker.Item label="2 Horas" value="120" />

        </Picker>
      </View>

      <Input placeholder={"Preço R$"} marginTop={13} onChangeText={text => console.log(text)} />
      <Input placeholder={"Complemento"} marginTop={13} height={100} onChangeText={text => console.log(text)} />

      <View marginTop={13}>
        <Picker
          style={{ flex: 1 }}
          selectedValue={selectedDuration}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDuration(itemValue)
          }>
          <Picker.Item label="Cabelo" value="Cabelo" />
          <Picker.Item label="Barba" value="Barba" />
          <Picker.Item label="Sobrancelha" value="Sobrancelha" />
        </Picker>
      </View>    

      <Footer height={250} onPress={() => props.navigation.navigate("Service")} />
    </Container>
  );
}

export default service_characteristics;