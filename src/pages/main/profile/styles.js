import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { w, h } from '../../../components/dimens';
import { Button } from '../../../components/ui/buttons';


export const Container = styled.SafeAreaView`
    flex: 1;
    padding-left: ${w(30)}px;
    padding-right: ${w(30)}px;
`;

export const FooterView = styled.View`
    justify-content: space-between;
    bottom: ${h(32)}px;
    align-self: center;
    position: absolute;
`;

export const Footer = (props) => {
    return (
        <FooterView>
            <View />
            <TouchableOpacity>
                <Button onPress={props.onPress} title={"SALVAR"} marginTop={0} width={w(53)} />
            </TouchableOpacity>
        </FooterView>
    )
}
