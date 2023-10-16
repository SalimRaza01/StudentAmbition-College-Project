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
        <Text style={styles.headertext}>   Notes</Text>

      </LinearGradient>
      <ScrollView style={{ marginBottom: 130 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>DBMS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>DAA</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            oonPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>COI</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>ITCS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Machine Learning</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Web Technology</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Computer Network</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Object Oriented Programming</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Image Processing</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Compiler Design</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Computer Graphics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1jJgrS-f9AlTMaa1-u2h7o9qCbR9Muy9w?usp=share_link')}>
            <Text style={styles.btntext}>Software Engineering</Text>
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

