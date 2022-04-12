import React, { useState } from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../../components/ui/header';
import { View } from 'react-native';
import { h, w } from '../../../../components/dimens';
import { gray } from '../../../../components/colors';
import { CustomText } from '../../../../components/ui/texts';
import CheckBox from 'react-native-check-box';

const tags = (props) => {
  const [isChecked01,setChecked01] = useState(false);
  const [isChecked02,setChecked02] = useState(false);
  const [isChecked03,setChecked03] = useState(false);
  return (
    <Container>
      <Header title={"Quais as suas áreas de atuação?"} onPress={() => props.navigation.navigate("ProfileOverview")} />

      {/*Barbearia*/}
      <View style={{ flexDirection: 'row' }}>
        <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Barbearia</CustomText>
        <CheckBox style={{ position: 'absolute', right: w(0) }} onClick={() => {setChecked01(!isChecked01)}} isChecked={isChecked01}/>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Cabelo Masculino*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Cabelo Masculino</CustomText>
        <CheckBox style={{ position: 'absolute', right: w(0) }} onClick={() => {setChecked02(!isChecked02)}} isChecked={isChecked02}/>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Cabelo Feminina*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Cabelo Feminina</CustomText>
        <CheckBox style={{ position: 'absolute', right: w(0) }} onClick={() => {setChecked02(!isChecked02)}} isChecked={isChecked02}/>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Design de Sobrancelha*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Design de Sobrancelha</CustomText>
        <CheckBox style={{ position: 'absolute', right: w(0) }} onClick={() => {setChecked03(!isChecked03)}} isChecked={isChecked03}/>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      <Footer height={460} onPress={() => props.navigation.navigate("ProfileOverview")} />
    </Container>
  );
}

export default tags;