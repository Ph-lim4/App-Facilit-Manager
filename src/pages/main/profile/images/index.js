import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Footer } from '../styles';
import { Input } from '../../../../components/ui/inputs'
import Header from '../../../../components/ui/header';
import { h, w } from '../../../../components/dimens';
import { CustomText } from '../../../../components/ui/texts';
import { primary_color, secondary_color, gray, dark_gray, light_gray } from '../../../../components/colors';
import { Feather } from '@expo/vector-icons';


const images = (props) => {
  return (
    <Container>
      <Header title={"Nome da Categoria"} onPress={() => props.navigation.navigate("Category")} />

      {/** Banner */}
      <View style={{
        height: h(120),
        borderWidth: h(3),
        borderColor: dark_gray(),
        borderRadius: h(3),
        borderColor: secondary_color()
      }}>
      </View>

      {/** Foto Perfil redonda */}
      <View style={{
        height: h(68),
        width: w(78),
        borderWidth: h(2),
        borderRadius: h(150),
        borderColor: secondary_color(),
        position: 'absolute',
        marginTop: h(175),
        marginLeft: w(50),
        backgroundColor: light_gray()
      }}>
      </View>

      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8), marginTop: h(38) }} />
      <CustomText fontSize={16} weight={'SemiBold'} style={{ left: h(17), marginTop: h(3) }}>Portifólio</CustomText>

      {/** Imagens */}
      <View style={{
        height: h(120),
        width: w(233),
        borderWidth: h(3),
        borderColor: secondary_color(),
        borderRadius: h(3),
        alignSelf: 'center'
      }}>
      </View>

      {/** Add imagens */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{
          width: h(200),
          height: h(16),
          alignItems: 'center',
          marginTop: w(3),
          flexDirection: 'row',
          left: h(15)
        }}
          onPress={() => props.navigation.navigate("Select_break")}>
          <Feather name={"plus"} color={secondary_color()} size={h(16)} />
          <CustomText fontSize={16} weight={"Medium"} color={secondary_color}  >Adicionar Imagens</CustomText>
        </TouchableOpacity>
      </View>

      <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8), marginTop: h(11) }} />
      <CustomText fontSize={16} weight={'SemiBold'} style={{ left: h(17), marginTop: h(3) }}>Mídias Sociais</CustomText>

      {/** Instagram */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: h(5)
      }}>
        <TouchableOpacity style={{
          width: h(30),
          height: h(30),
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: w(5)
        }}>
          <Feather name={"instagram"} color={primary_color()} size={h(24)} />
        </TouchableOpacity>
        <Input placeholder={"Instagram"} width={260} onChangeText={text => console.log(text)} />
      </View>

      {/** Instagram */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: h(10)
      }}>
        <TouchableOpacity style={{
          width: h(30),
          height: h(30),
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: w(5)
        }}>
          <Feather name={"link"} color={primary_color()} size={h(24)} />
        </TouchableOpacity>
        <Input placeholder={"Site"} width={260} onChangeText={text => console.log(text)} />
      </View>



      <Footer height={530} onPress={() => props.navigation.navigate("Category")} />
    </Container>
  );
}

export default images;