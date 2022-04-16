import React from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../../components/ui/header';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../../components/ui/texts';
import { h, w } from '../../../../components/dimens';
import { Feather } from '@expo/vector-icons';
import { mid_gray, primary_color, secondary_color } from '../../../../components/colors';

const select_time = (props) => {
    return (
        <Container>
            <Header title={"Selecionar horário"} onPress={() => props.navigation.navigate("Time")} />
            <CustomText fontSize={10} weight={"SemiBold"}  >#Aqui vem um scroll#</CustomText>
            <View>
                
            </View>
            <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />

            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: h(200), height: h(16), alignItems: 'center',  marginTop: w(18),flexDirection: 'row' }} onPress={() => props.navigation.navigate("Select_break")}>
                    <Feather name={"plus"} color={secondary_color()} size={h(16)} />
                    <CustomText fontSize={16} weight={"Medium"} color={secondary_color}  >Adicionar Intervalo</CustomText>
            </TouchableOpacity>
            </View>
            <Footer onPress={() => props.navigation.navigate("Time")} />
        </Container>
    );
}

export default select_time;