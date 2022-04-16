import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { h, w } from '../../dimens';
import { Feather } from '@expo/vector-icons';
import { gray, dark_gray } from '../../colors';
import { CustomText } from '../texts';
import { Container, Line, Touch } from './styles';

const Service_list = (props) => {

    
    return <View>
        {/*Lista de categorias com icones*/}
        <Line/>
        <Container>
            <Touch onPress={() => props.navigation.navigate("Information")}>
                <CustomText fontSize={14} weight={"Medium"} style={{ marginLeft: w(10), marginRight: w(0) }}>{props.title}</CustomText>
                <Feather name={"edit"} color={dark_gray()} size={h(20)} style={{ position: 'absolute', marginLeft: w(255), marginRight: w(0) }} />
            </Touch>
            <Touch onPress={() => props.navigation.navigate()}>
                <Feather name={"trash-2"} color={dark_gray()} size={h(20)} />
            </Touch>
        </Container>
    </View>;
}

export default Service_list;

