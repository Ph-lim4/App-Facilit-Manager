import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Footer } from '../styles';
import { CustomText } from '../../../../components/ui/texts';
import { h, w } from '../../../../components/dimens';
import { gray, red } from '../../../../components/colors';

const profilleOverview = (props) => {
  return (
    <Container>

      <View>
        <CustomText fontSize={20} weight={"SemiBold"} style={{ textAlign: 'center', marginLeft: w(10), marginTop: w(37), marginBottom: w(10) }}>Configurações</CustomText>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8), marginBottom: w(7) }}></View>

      {/*Informações*/}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Information")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Informações</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Imagens*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate()}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Imagens</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Localização*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Address")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Localização</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Categorias*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Category")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Categorias</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Serviços*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Service")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Serviços</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Horários*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Time")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Horários</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Funcionários*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate()}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Funcionários</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Tags*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate("Tags")}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Tags</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Métodos de Pagamento*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate()}>
          <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10) }}>Métodos de Pagamento</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

      {/*Sair*/}
      <View style={{ flexDirection: 'row', marginTop: h(10) }}>
        <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(20) }} onPress={() => props.navigation.navigate()}>
          <CustomText fontSize={14} color={red} weight={"Medium"} style={{ marginLeft: w(10) }}>Sair</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>

    </Container>
  );
}

export default profilleOverview;