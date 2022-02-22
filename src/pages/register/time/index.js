import React from 'react';
import { Container, Footer, TopView } from '../styles';
import Header from '../../../components/ui/header';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../components/ui/texts';
import { h, w } from '../../../components/dimens';
import { Feather } from '@expo/vector-icons';
import { mid_gray } from '../../../components/colors';

const time = (props) => {
    return (
        <Container>
            <Header title={"Horário de funcionamento"} onPress={() => props.navigation.navigate("Tags")} />
            <View>
                {/*Segunda-feira*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Segunda-feira</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Terça-feira*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Terça-feira</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Quarta-feira*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Quarta-feira</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Quinta-feira*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Quinta-feira</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Sexta-feira*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Sexta-feira</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Sábado*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Sábado</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>

                {/*Domingo*/}
                <View>
                    <TouchableOpacity style={{ alignItems: `center`, flexDirection: `row`, height: h(36) }} onPress={() => props.navigation.navigate("Select_time")}>
                        <CustomText fontSize={10}>Domingo</CustomText>
                        <CustomText fontSize={10} style={{ position: `absolute`, left: w(140) }}>10:00 - 20:00</CustomText>
                        <Feather name={"chevron-right"} color={mid_gray()} size={w(10)} style={{ position: `absolute`, right: w(4) }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: mid_gray(), height: h(1), width: `100%` }} />
                </View>
            </View>
            <Footer onPress={() => props.navigation.navigate("Category")} />
        </Container>
    );
}

export default time;