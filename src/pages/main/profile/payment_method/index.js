import React from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../../components/ui/header';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../../components/ui/texts';
import { h, w } from '../../../../components/dimens';
import { Feather } from '@expo/vector-icons';
import { mid_gray, primary_color, secondary_color, gray, dark_gray } from '../../../../components/colors';
import { Button } from '../../../../components/ui/buttons';
import Payment_method_list from '../../../../components/ui/lists/payment_method_list';


const payment_method = (props) => {
    return (
        <Container>
            <Header title={"Métodos de pagamento"} onPress={() => props.navigation.navigate("ProfileOverview")} />
            <Payment_method_list title={"Pix"}/>

            <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: h(200), height: h(16), alignItems: 'center', marginTop: w(16), flexDirection: 'row' }} onPress={() => props.navigation.navigate("Category_name")}>
                    <Feather name={"plus"} color={secondary_color()} size={h(16)} />
                    <CustomText fontSize={16} weight={"Medium"} color={secondary_color}  >Adicionar categoria</CustomText>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button width={50} style={{ marginLeft: w(33), alignSelf: 'center', justifyContent: 'center', flex: 1, alignItems: 'center' }} marginBottom={39} marginTop={19} marginLeft={6} onPress={() => { }} title={"+Pix"} />
                <Button width={80} style={{ marginLeft: w(33), alignSelf: 'center', justifyContent: 'center', flex: 1, alignItems: 'center' }} marginBottom={39} marginTop={19} marginLeft={18} onPress={() => { }} title={"+Dinheiro"} />
                <Button width={70} style={{ marginLeft: w(33), alignSelf: 'center', justifyContent: 'center', flex: 1, alignItems: 'center' }} marginBottom={39} marginTop={19} marginLeft={18} onPress={() => { }} title={"+Cartão"} />
            </View>
            <Footer onPress={() => props.navigation.navigate("ProfileOverview")} />
        </Container>
    );
}

export default payment_method;