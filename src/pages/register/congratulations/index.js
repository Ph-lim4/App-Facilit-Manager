import React from 'react';
import { Container } from '../styles';
import Header from '../../../components/ui/header';
import {  View } from 'react-native';
import { CustomText } from '../../../components/ui/texts';
import { h, w } from '../../../components/dimens';
import { mid_gray, secondary_color, white } from '../../../components/colors';
import { Button } from '../../../components/ui/buttons';

const congratulations = (props) => {
    return (
        <Container style={{backgroundColor: secondary_color()}}>
            <View style={{alignSelf: 'center', justifyContent: 'center', flex:1, alignItems: 'center' }}>
            <CustomText style={{textAlign: 'center'}} fontSize={16} weight={"SemiBold"} color={white} >
             Parabéns,{'\n'}
             seu estabelecimento já{'\n'}
             está registrado em nosso app{'\n'}
             {'\n'}
             Agora vamos cadastrar os{'\n'}
             funcionários do local:
               </CustomText>
            </View>
            
            <Button marginBottom={15} marginTop={0} outline onPress={() => props.navigation.navigate("Add_owner")} title={"Trabalho sozinho"}/>   
            <Button marginBottom={39} marginTop={0} outline onPress={() => props.navigation.navigate("Add_employee")} title={"Tenho funcionários"}/>   
        </Container>
    );
}

export default congratulations;