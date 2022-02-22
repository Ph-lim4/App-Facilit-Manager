import React from 'react';
import { Container } from '../styles';
import Header from '../../../components/ui/header';
import {  View } from 'react-native';
import { CustomText } from '../../../components/ui/texts';
import { h, w } from '../../../components/dimens';
import { mid_gray, secondary_color, white } from '../../../components/colors';
import { Button } from '../../../components/ui/buttons';

const congratulations_02 = (props) => {
    return (
        <Container style={{backgroundColor: secondary_color()}}>
            <View style={{alignSelf: 'center', justifyContent: 'center', flex:1, alignItems: 'center' }}>
            <CustomText style={{textAlign: 'center'}} fontSize={18} weight={"SemiBold"} color={white} >
             Funcionários adicionados com{'\n'}
             sucesso!{'\n'}
             está registrado em nosso app{'\n'}
             Você poderá adicionar outros{'\n'}
             funcionários posteriormente
               </CustomText>
            </View>
            
            <Button width={40} style={{alignItems: 'center'}} marginBottom={39} marginTop={0} outline onPress={() => props.navigation.navigate("About_company")} title={"OK"}/>   
            
        </Container>
    );
}

export default congratulations_02;