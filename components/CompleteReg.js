import React, { useEffect, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default function CompleteReg({ navigation }) {
  const bounceAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50, // Adjust the speed as desired
      bounciness: 20, // Adjust the bounciness as desired
    }).start();

    // Delay for 2 seconds (adjust as needed)
    const delay = setTimeout(() => {
      navigation.navigate('Home'); // Replace 'AnotherScreen' with your target screen name
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, [navigation]);

  const logoStyle = {
    transform: [{ scale: bounceAnim }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.para1}> All Set </Text>
      <Animated.Image
        style={[styles.logo, logoStyle]}
        source={require('../assets/tick.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(30),
    alignSelf: 'center',
  },
  para1: {

    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    textAlign:'center',
    
    marginTop: responsiveHeight(55)

  },
});
