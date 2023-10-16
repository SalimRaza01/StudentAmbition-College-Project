

import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Picker } from "@react-native-picker/picker";

export default function SelectYear(props) {

  const [gender, setGender] = useState('Unknown');

  return (
    <View style={styles.weight}>
        <Image style={styles.wlogo} source={require('../assets/year.png')} />
        <Picker 
          selectedValue={gender}
          onValueChange={(value, index) => setGender(value)}
          mode="picker"
          style={styles.picker}
        >
          <Picker.Item label="       Select Year" value="Unknown" />
          <Picker.Item label="       1st Year" value="1st Year" />
          <Picker.Item label="       2nd Year" value="2nd Year" />
              <Picker.Item label="       3rd Year" value="3rd Year" />
          <Picker.Item label="       4th Year" value="4th Year" />
          </Picker>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize:responsiveFontSize(1),
    color: 'grey',
    textAlign: 'center'
  },
  weight: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  picker: {
    position: 'absolute',
    color: 'grey',
    width: responsiveWidth(80),
    height: responsiveHeight(7.8),
    fontSize: responsiveFontSize(1),
    marginTop: responsiveHeight(-0.9)
  
    // backgroundColor: 'green'
  },

  wlogo: {
    position: 'absolute',
    width:responsiveWidth(4.5),
    height: responsiveHeight(2.6),
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },

});

