import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { primary_color, white } from '../../colors';
import { w } from '../../dimens';
import { CustomText } from '../texts';
import { TopView } from './styles';

const Header = (props) => {
    return (
        <TopView>
            <TouchableOpacity onPress={props.onPress}>
                <Feather name={"arrow-left"} color={props.white ? white() : primary_color()} size={w(16)} />
            </TouchableOpacity>
            <CustomText fontSize={14} weight={"SemiBold"} color={props.white ? white : primary_color} >  {props.title}</CustomText>
        </TopView>
    );
}

export default Header;