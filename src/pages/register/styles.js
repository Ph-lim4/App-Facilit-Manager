import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { w, h } from '../../components/dimens';
import { Button } from '../../components/ui/buttons';
import { CustomText } from '../../components/ui/texts';

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
                <Button onPress={props.onPress} title={"CONTINUAR"} marginTop={0} />
                {props.hideText &&
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <CustomText fontSize={8}>Ao inscrever-se você concorda com nosso </CustomText>
                            <CustomText fontSize={8} weight={"SemiBold"}>Termos e condições</CustomText>
                        </View>
                        <CustomText fontSize={8} weight={"SemiBold"}>e Política de Privacidade.</CustomText>
                    </View>
                }
            </TouchableOpacity>
        </FooterView>
    )
}
