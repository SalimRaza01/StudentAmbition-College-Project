import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Picker } from "@react-native-picker/picker";


const SelectBranch =() =>{

  const [gender, setGender] = useState('');

  return (
    <View style={styles.weight}>
        <Image style={styles.wlogo} source={require('../assets/branch.png')} />
        <Picker 
          selectedValue={gender}
          onValueChange={(Itemvalue, index) => setGender(Itemvalue)}
          mode="picker"
          style={styles.picker}
        >
          <Picker.Item label="       Select Branch" value="Unknown" />
          <Picker.Item label="       CSE" value="CSE" />
          <Picker.Item label="       ME" value="ME" />
          <Picker.Item label="       ECE" value="ECE" />
          <Picker.Item label="       Civil" value="Civil" />
          <Picker.Item label="       EE" value="EE" />
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
export default SelectBranch 
