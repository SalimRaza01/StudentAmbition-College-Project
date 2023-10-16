import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function SelectPrefer(props) {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');
    const navigation = useNavigation();
    const handle = () => {
        if (selectedValue1 === 'B-Tech' &&
         (selectedValue2 === 'CSE' || selectedValue2 === 'EE' || selectedValue2 === 'ECE' || selectedValue2 === 'ME' || selectedValue2 === 'Civil')  && 
         selectedValue3 === '1' && selectedValue4 === 'Notes') {
            navigation.navigate('Subject1');
        } else if (selectedValue1 === 'B-Tech' &&
        (selectedValue2 === 'CSE' || selectedValue2 === 'EE' || selectedValue2 === 'ECE' || selectedValue2 === 'ME' || selectedValue2 === 'Civil')  && 
        selectedValue3 === '1' && selectedValue4 === 'Lectures') {
           navigation.navigate('L1');
        }else if (selectedValue1 === 'B-Tech' &&
        (selectedValue2 === 'CSE' || selectedValue2 === 'EE' || selectedValue2 === 'ECE' || selectedValue2 === 'ME' || selectedValue2 === 'Civil')  && 
        selectedValue3 === '1' && selectedValue4 === 'Question Papers') {
           navigation.navigate('Q1');
        }else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '2' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCS2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '3' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCS3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '4' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCS4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '2' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectME2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '3' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectME3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '4' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectME4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '2' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCivil2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '3' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCivil3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '4' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectCivil4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '2' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectECE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '3' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectECE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '4' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectECE4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '2' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectEE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '3' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectEE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '4' && selectedValue4 ==='Notes') {
            navigation.navigate('SubjectEE4');
        
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '2' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCS2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '3' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCS3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '4' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCS4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '2' && selectedValue4 ==='Lectures') {
            navigation.navigate('LME2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '3' && selectedValue4 ==='Lectures') {
            navigation.navigate('LME3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '4' && selectedValue4 ==='Lectures') {
            navigation.navigate('LME4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '2' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '3' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '4' && selectedValue4 ==='Lectures') {
            navigation.navigate('LCE4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '2' && selectedValue4 ==='Lectures') {
            navigation.navigate('LECE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '3' && selectedValue4 ==='Lectures') {
            navigation.navigate('LECE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '4' && selectedValue4 ==='Lectures') {
            navigation.navigate('LECE4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '2' && selectedValue4 ==='Lectures') {
            navigation.navigate('LEE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '3' && selectedValue4 ==='Lectures') {
            navigation.navigate('LEE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '4' && selectedValue4 ==='Lectures') {
            navigation.navigate('LEE4');
        }  else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '2' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCS2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '3' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCS3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'CSE' && selectedValue3 === '4' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCS4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '2' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QME2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '3' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QME3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ME' && selectedValue3 === '4' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QME4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '2' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '3' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'Civil' && selectedValue3 === '4' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCE4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '2' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QCE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '3' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QECE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'ECE' && selectedValue3 === '4' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QECE4');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '2' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QEE2');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '3' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QEE3');
        } else if (selectedValue1 === 'B-Tech' && selectedValue2 === 'EE' && selectedValue3 === '4' && selectedValue4 ==='Question Papers') {
            navigation.navigate('QEE4');
        } else {
            alert("select complete option");
        }
    };
    return (
        <View>
             <TouchableOpacity style={styles.back} 
      onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.back}>
        <Image style={styles.wpic} source={require('../assets/back.png')} />
         
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>      Select Preference</Text>

      </LinearGradient>
            
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue1}
                    onValueChange={(itemValue) => setSelectedValue1(itemValue)} style={styles.picker}
                >

                    <Picker.Item label="      Select a Course" value="" />
                    <Picker.Item label="      B-Tech" value="B-Tech" />
                    
                </Picker>
            </View>
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue2}
                    onValueChange={(itemValue) => setSelectedValue2(itemValue)} style={styles.picker}
                >
                    <Picker.Item label="     Select a Branch" value="" />
                    <Picker.Item label="     CSE" value="CSE" />
                    <Picker.Item label="     ME" value="ME" />
                    <Picker.Item label="     ECE" value="ECE" />
                    <Picker.Item label="     Civil" value="Civil" />
                    <Picker.Item label="     EE" value="EE" />
                </Picker>
            </View>
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue3}
                    onValueChange={(itemValue) => setSelectedValue3(itemValue)} style={styles.picker}
                >
                    <Picker.Item label="      Select a Year" value="" />
                    <Picker.Item label="      1" value="1" />
                    <Picker.Item label="      2" value="2" />
                    <Picker.Item label="      3" value="3" />
                    <Picker.Item label="      4" value="4" />

                </Picker>
            </View>
            <View style={styles.weight}>
                <Image style={styles.wlogo} source={require('../assets/branch.png')} />
                <Picker
                    selectedValue={selectedValue4}
                    onValueChange={(itemValue) => setSelectedValue4(itemValue)} style={styles.picker}
                >
                    <Picker.Item label="      Select an option" value="" />
                    <Picker.Item label="      Notes" value="Notes" />
                    <Picker.Item label="      Question Papers" value="Question Papers" />
                    <Picker.Item label="      Lectures" value="Lectures" />


                </Picker>
            </View>
            <TouchableOpacity style={styles.mybtn}
                onPress={handle}
            >
                <Text style={styles.btntext}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    wlogo: {
        position: 'absolute',
        width: responsiveWidth(4.5),
        height: responsiveHeight(2.6),
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(2),
    },
    header: {
        fontSize: responsiveFontSize(4),
        height: responsiveHeight(7),
        marginBottom: responsiveHeight(12),
        marginLeft:50,
        width:350,
        marginTop:-54
      },
     
      headertext: {
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(3),
        color: 'white',
        fontWeight: 'bold',
      },
      wpic: {
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
    para1: {
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        color: '#5A61C9',
        marginLeft: responsiveWidth(18),
        marginTop: responsiveHeight(6)
    },
    mybtn: {
        backgroundColor: '#92A3FD',
        borderRadius: 30,
        width: responsiveWidth(80),
        height: responsiveHeight(6.8),
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(25)
    },
    btntext: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginTop: responsiveHeight(2),
        color: 'white',
        fontWeight: 'bold'
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
        marginTop: responsiveHeight(4),
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
})