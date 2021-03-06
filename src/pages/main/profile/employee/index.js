import React from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../../components/ui/header';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../../components/ui/texts';
import { h, w } from '../../../../components/dimens';
import { Feather } from '@expo/vector-icons';
import { mid_gray, primary_color, secondary_color, gray, dark_gray } from '../../../../components/colors';
import { Button } from '../../../../components/ui/buttons';
import Employee_list from '../../../../components/ui/lists/employee_list';


const employee = (props) => {
    return (
        <Container>
            <Header title={"Funcionários"} onPress={() => props.navigation.navigate("ProfileOverview")} />
            <Employee_list title={"Antônio"}/>

            <View style={{ width: w(306), height: h(1), backgroundColor: gray(), marginTop: h(8) }}></View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: h(200), height: h(16), alignItems: 'center', marginTop: w(16), flexDirection: 'row' }} onPress={() => props.navigation.navigate("Category_name")}>
                    <Feather name={"plus"} color={secondary_color()} size={h(16)} />
                    <CustomText fontSize={16} weight={"Medium"} color={secondary_color}  >Adicionar funcionário</CustomText>
                </TouchableOpacity>
            </View>

            <Footer onPress={() => props.navigation.navigate("ProfileOverview")} />
        </Container>
    );
}

export default employee;