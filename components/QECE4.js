import React from 'react';
import { Text, View, StyleSheet, ScrollView,Linking, Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';
const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function SubjectCS3(props) {

  return (

    <View >


<TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('SelectPrefer')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic1} source={require('../assets/back.png')} />
         
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>   Question Papers</Text>

      </LinearGradient>
      <ScrollView style={{ marginBottom: 130 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Network Theory</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Electromagnetic Feild Theory</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            oonPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Electronics Devices</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Digital Signal Processing</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_linkL')}>
            <Text style={styles.btntext}>COI</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Integrated Circuits</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>ITCS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Digital Communication</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Control System</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Circuit Simulation</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>Analog Signal Processing</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1rekucqvsuUBWWZDkMF68DLADpw9KKqUE?usp=share_link')}>
            <Text style={styles.btntext}>RVSP</Text>
          </TouchableOpacity>
        </LinearGradient>
        


      </ScrollView>
        
    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(7),
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
  btntext: {
  
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex:1,
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  }


})

