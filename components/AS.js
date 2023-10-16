import React from 'react';
import { Text, View, StyleSheet,Linking,Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function HomeScreen(props) {

  return (

    <View >
<TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic1} source={require('../assets/back.png')} />
         
        </LinearGradient>
      </TouchableOpacity>

     
      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>  Additional Skills</Text>

      </LinearGradient>

      <TouchableOpacity style={styles.container}
        onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLW-zSkCnZ-gA5Jn6gZtUa6-aG0OoRZyb6')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Adobe      Photoshop</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container2}
       onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLVlQHNRLflP_5_vCknMsxLS-mTJgq1QzH')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>UI        Designing</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container}
       onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL9pkETrdJ0rZoid7XU1OmQ5zvPVQ0sRJl')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Graphic     Designing</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} 
       onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLVlQHNRLflP_5_vCknMsxLS-mTJgq1QzH')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>UX      Designing</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container}
        onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLuRPummNMvIN43IBo1EltezV2ngqYz5T6')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Adobe             XD</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2}
        onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLW-zSkCnZ-gDer-VZlBbe1f9-G0zNYdtg')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Logo       Designing</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container}
        onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLuRPummNMvINdAbI_WT7R5vdjcyRPeRiq')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Figma</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} 
       onPress={ () =>handleLinkPress('https://youtu.be/4_CHZQ1Euek')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Wire        Framing</Text>
        </LinearGradient>
      </TouchableOpacity>
      

    </View>
  )

}


const styles = StyleSheet.create({


  btntext: {
    fontSize: responsiveFontSize(2),
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
  wpic1: {
    position: 'absolute',
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
borderRadius:40,

   

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

})

