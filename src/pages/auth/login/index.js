import React from 'react';
import { Container, ViewBotton, ViewTextEnd } from './styles';
import { CustomText } from '../../../components/ui/texts'
import { h, w } from '../../../components/dimens'
import { Input } from '../../../components/ui/inputs';
import { Button } from '../../../components/ui/buttons';
import { TouchableOpacity } from 'react-native';
import { primary_color } from '../../../components/colors';

const login = (props) => {
    return (
        <Container>
            <CustomText fontSize={14} weight={"SemiBold"} style={{ position: 'absolute', top: h(42), left: w(47) }}>Fazer Login</CustomText>
            <Input placeholder={"USUÁRIO"} marginTop={0} icon={"user"} width={244} onChangeText={text => console.log(text)} />
            <Input placeholder={"SENHA"} marginTop={10} icon={"lock"} password width={244} onChangeText={text => console.log(text)} />
            <Button marginTop={13} width={244} title={"ENTRAR"} />
            <ViewTextEnd>
                <CustomText color={primary_color} fontSize={7}>Esqueci minha senha</CustomText>
            </ViewTextEnd>
            <ViewBotton>
                <CustomText color={primary_color} fontSize={10}>Ainda não tem sua conta? </CustomText>
                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <CustomText color={primary_color} fontSize={10} weight={"Bold"}>Cadastre-se</CustomText>
                </TouchableOpacity>
            </ViewBotton>
        </Container>);
}

export default login;