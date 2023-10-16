import React from 'react';
import { Text, View, StyleSheet,Linking,Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

import Login from './Login';

const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function HomeScreen(props) {

  return (

    <View >
      <TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic} source={require('../assets/Home.png')} />
         
        </LinearGradient>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.logoutIcon} 
      onPress={() => props.navigation.navigate('Logout')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
       
        <Image style={styles.wpic} source={require('../assets/Logout.png')} />
         
        </LinearGradient>
      </TouchableOpacity>
       */}

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>Home</Text>

      </LinearGradient>

      <TouchableOpacity style={styles.container}
        onPress={ () =>handleLinkPress('https://www.youtube.com/live/86sCMfOK4xA?feature=share')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Scope</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SelectPrefer')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Course</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container}
       onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Gain            Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('Placement')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Placement</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Coding')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('Internship')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Internship</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('AS')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Additional Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.container2} 
       onPress={() => props.navigation.navigate('AboutPage')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>About us</Text>
        </LinearGradient>
      </TouchableOpacity>


    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(12),
    marginLeft:50,
    width:350,
    marginTop:-54
    
  
  },
 
  headertext1: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(3),
    color: 'white',
    fontWeight: 'bold',
  },
   wpic: {
    position: 'absolute',
    height: responsiveHeight(3),
    width: responsiveWidth(6.2),
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1.7),
   
   

},
 back: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    
     width:50
  },

  headertext: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    
    color: 'white',
    fontWeight: 'bold',
  },
  // logoutIcon: {
  //   fontSize: responsiveFontSize(4),
  //   height: responsiveHeight(7.3),
  //   marginLeft:343,
  //    width:50,
  //    marginTop:-56
  // },
  

  btntext: {
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
  },
  container: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(14),
    width: responsiveWidth(30),
    height: responsiveHeight(13),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 100,
    shadowRadius: 10,
  },
  container2: {
    marginTop: responsiveHeight(-13),
    marginLeft: responsiveWidth(55),
    width: responsiveWidth(30),
    height: responsiveHeight(13),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 100,
    shadowRadius: 10,
  },


})

