import React from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../components/ui/header';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../components/ui/texts';
import { h, w } from '../../../components/dimens';
import { Feather } from '@expo/vector-icons';
import { mid_gray, secondary_color, primary_color } from '../../../components/colors';
import { Input } from '../../../components/ui/inputs';

const add_owner = (props) => {
    return (
        <Container>
            <Header title={"Registre-se"} onPress={() => props.navigation.navigate("Congratulations")} />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ width: h(50), height: h(50), borderWidth: w(1), borderRadius: h(25), borderColor: primary_color(), alignItems: 'center', justifyContent: 'center', marginRight: w(11) }}>
                    <Feather name={"camera"} color={primary_color()} size={h(24)} />
                </TouchableOpacity>
                <Input marginTop={22} placeholder={"Cep"} width={222} onChangeText={text => console.log(text)} />
            </View>

            
            <Footer onPress={() => props.navigation.navigate("Congratulations_02")} />
        </Container>
    );
}

export default add_owner;