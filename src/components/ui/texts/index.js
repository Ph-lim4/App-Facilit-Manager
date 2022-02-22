import React from 'react';
import { gray, primary_color, secondary_color, third_color, white } from '../../colors'
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
    
export const CustomText = (props) => {
    const [loaded] = useFonts({
        MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
        MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
        MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
        Montserrat: require('../../../assets/fonts/Montserrat.ttf'),
    });

    if (!loaded) {
        return null
    }

    const style = [
        { 
            color: props.color? props.color() :  primary_color(), 
            fontFamily: props.weight? "Montserrat"+props.weight : "Montserrat",
            fontSize: RFValue(props.fontSize, windowWidth),
        }, props.style || {}]
    
    const allProps = Object.assign({}, props, { style: style });

    return <Text {...allProps}>{props.children}</Text>

}

const windowWidth = Dimensions.get('window').width*1.6;

export const TextGreen = styled.Text`
    color: ${primary_color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;
export const TextGray = styled.Text`
    color: ${gray};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;

export const TextLightGreen = styled.Text`
    color: ${third_color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;

export const TextRed = styled.Text`
    color: #FF0000;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;

export const TextWhite = styled.Text`
    color: ${white};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;

export const TextDarkGray = styled.Text`
    color: ${secondary_color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;

export const TextLightGray = styled.Text`
    color: #cccccc;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => RFValue(props.fontSize, windowWidth)}px;
`;
