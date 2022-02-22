import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { secondary_color, white } from '../../../components/colors'
import { h, w } from '../../dimens';
import { CustomText } from '../texts';

export const Button = (props) => {
  return (
    <View style={{ marginTop: h(props.marginTop), marginBottom: props.marginBottom ? h(props.marginBottom) : 0, width: props.width ? props.width : w(300),alignItems:'center', alignSelf: 'center', marginLeft: props.marginLeft  ? props.marginLeft : w(0) }}>
      <TouchableOpacity onPress={props.onPress} style={props.outline ? styles.BtnOutline : styles.BtnGreen} >
        <View style={{ width: props.width ? w(props.width) : w(300), alignItems: 'center', justifyContent:'center' }}>
          <CustomText fontSize={12} weight={"SemiBold"} color={white}>
            {props.title}
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BtnGreen: {
    backgroundColor: secondary_color(),
    justifyContent: 'center',
    height: h(35),
    borderRadius: h(3),
  },
  BtnOutline: {
    borderColor: white(),
    borderWidth: h(1),
    justifyContent: 'center',
    height: h(35),
    borderRadius: h(3),
    alignSelf: 'center'
  },
});
