import React from 'react'
import { View } from './styles';
import { gray, primary_color } from '../../colors'
import { Feather } from '@expo/vector-icons'
import { h, w } from '../../dimens';
import { TextInput } from 'react-native'

export const Input = (props) => {
    return (
        <View style={{
            marginTop: props.marginTop ? h(props.marginTop) : 0, width: props.width ? w(props.width) : w(300),
            height: props.height ? h(props.height) : h(35)
        }}>
            {props.icon && <Feather name={props.icon} size={h(12)} color={gray()} />}
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={gray()}
                onChangeText={props.onChangeText}
                keyboardType={props.type ? props.type : 'default'}
                secureTextEntry={props.password}
                style={{ flex: 1, marginLeft: w(4), color: primary_color() }}
            />
        </View>
    );

}
