import React, { useRef, useEffect } from "react";
import { Text, View,  Image, StyleSheet, TouchableOpacity, Linking,Animated } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
    Linking.openURL(url) 
    };

export default function AboutPage(props) {

    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.stagger(300, [
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
        ]).start();
    }, [slideAnim]);


    return (
        <View>
 <TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic1} source={require('../assets/back.png')} />
         
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>  About us</Text>

      </LinearGradient>
            
            <Text style={styles.para2}>Student Ambition is an Android Application that generally helps students to get information about right course, knowledge and placement related guidance. </Text>
            

            <Text style={styles.subtitle3}>
               Developer's :
            </Text>

            <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}
            onPress={ () =>handleLinkPress('https://www.linkedin.com/in/salim-raza-a72323228')}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member1.png')} />
                <Text style={styles.subtitle2}>
                    Salim Raza
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}
            onPress={ () =>handleLinkPress('https://www.linkedin.com/in/abhishek-gupta-40b681203/')}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member2.png')} />
                <Text style={styles.subtitle2}>
                    Abhishek Gupta
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}
            onPress={ () =>handleLinkPress('https://www.linkedin.com/in/anshika-chaudhary-3630a125a')}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member3.png')} />
                <Text style={styles.subtitle2}>
                    Anshika Chaudhary
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}
            onPress={ () =>handleLinkPress('https://www.youtube.com/live/86sCMfOK4xA?feature=share')}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member4.png')} />
                <Text style={styles.subtitle2}>
                    Satyendra Kumar
               </Text>
                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>
          
                <Text style={styles.para3}>Version 1.0.0
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle1: {
         
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#3b5995',
        marginTop: responsiveHeight(9),
        marginLeft: responsiveWidth(10),
    },
    subtitle3: {
         
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: '#3b5995',
        marginTop: responsiveHeight(6),
        marginLeft: responsiveWidth(10),
    },
    linearGradient: {
        flex: 1,
        borderRadius: 15
      },
    container1: {
        // position: 'absolute',
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(7),
        width: responsiveWidth(86),
        height: responsiveHeight(10),
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 100,
        shadowRadius: 10,
        elevation: 7
    },
    wpic: {
        position: 'absolute',
        height: responsiveHeight(6.3),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1.5),
        borderRadius:30,
       

    },
    para1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'white',
        marginLeft: responsiveWidth(20),
        marginTop: responsiveHeight(0.4)
    },
    para2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'grey',
        textAlign:'justify',
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(9),
        marginTop: responsiveHeight(2)
    },
    para3: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'grey',
        justifyContent:'center',
        textAlign:'center',
        marginTop: responsiveHeight(12)
    },
    subtitle2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.8),
        color: 'white',
        marginLeft: responsiveWidth(20),
        marginTop: responsiveHeight(2),
        fontFamily: 'poppins',
        fontWeight: 'bold'
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