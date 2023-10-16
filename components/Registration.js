import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CheckBox from '@react-native-community/checkbox';
import SelectGender from './SelectGender';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import NetInfo from '@react-native-community/netinfo';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Registration(props) {
  const navigation = useNavigation();

  const [isConnected, setIsConnected] = useState(true);
  const [firstname, setFirstName] = useState('');
  const [firstnameError, setFirstNameError] = useState('');
  const [lastname, setLastName] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelection] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('pass', pass);
    } catch (error) {
      console.log('Error saving credentials:', error);
    }
  };

  const signUp = () => {
    if (!isConnected) {
      alert('No internet connection');
      return;
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then(userCredential => {
        if (isChecked) {
          saveCredentials();
        }

        alert('Registration Successful');
        navigation.replace('CompleteReg');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Already Used Email');
        } else if (error.code === 'auth/invalid-email') {
          alert('Invalid email');
        } else {
          alert('Error: ' + error.message);
        }
      });
  };


  const handleFirstNameChange = text => {
    const trimmedText = text.trim();

    if (trimmedText.length < 3) {
      setFirstNameError('Name must be at least 3 characters');
    } else {
      setFirstNameError('');
    }

    setFirstName(trimmedText);

    if (text !== trimmedText) {
      alert('Whitespace is not allowed');
    }
  };

  const handleLastNameChange = text => {
    const trimmedText = text.trim();

    if (trimmedText.length < 3) {
      setLastNameError('Name must be at least 3 characters');
    } else {
      setLastNameError('');
    }

    setLastName(trimmedText);

    if (text !== trimmedText) {
      alert('Whitespace is not allowed');
    }
  };


  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };
  const handlePassChange = text => {
    const passtrim = pass.trim();
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passRegex.test(text)) {
      setPassError(
        'Weak Password',
      );
    } else {
      setPassError('');
    }
    setPass(text);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View>
      <View>
        <Text style={styles.para1}>Register</Text>
        <View style={styles.fname}>
          <Image
            style={styles.flogo}
            source={require('../assets/Profile.png')}
          />
          <TextInput
            placeholder="First Name"
            placeholderTextColor={'grey'}
            color="black"
            value={firstname}
            onChangeText={handleFirstNameChange}
          />
        </View>
        {firstnameError ? (
          <Text style={styles.error}>{firstnameError}</Text>
        ) : null}

        <View style={styles.lname}>
          <Image
            style={styles.llogo}
            source={require('../assets/Profile.png')}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'grey'}
            color="black"
            value={lastname}
            onChangeText={handleLastNameChange}
          />
        </View>
        {lastnameError ? (
          <Text style={styles.error}>{lastnameError}</Text>
        ) : null}

        <View style={styles.email}>
          <Image
            style={styles.elogo}
            source={require('../assets/Message.png')}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={'grey'}
            color="black"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <SelectGender></SelectGender>

        <View style={styles.pass}>
          <Image style={styles.plogo} source={require('../assets/Lock.png')} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'grey'}
            color="black"
            value={pass}
            onChangeText={handlePassChange}
          />
        </View>
        {passError ? <Text style={styles.error}>{passError}</Text> : null}

        <View style={styles.pass}>
          <Image style={styles.plogo} source={require('../assets/Lock.png')} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'grey'}
            color="black"
            value={pass}
            onChangeText={handlePassChange}
          />
        </View>
        {passError ? <Text style={styles.error}>{passError}</Text> : null}

        <View style={styles.checkb}>
          <CheckBox
            style={{
              marginLeft: responsiveWidth(5),
              marginTop: responsiveHeight(1),
              borderColor: 'grey',
            }}
            value={selected}
            onPress={handleCheckboxChange}
            onValueChange={setSelection}
            tintColors={{ true: '#2530A3', false: 'grey' }}
          />
          <Text style={styles.checktext}>
            i agree with Privacy Policy and Term & Conditions
          </Text>
        </View>
        {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>

      <TouchableOpacity
        style={[styles.mybtn]}
        onPress={() => {
          signUp();
        }}>
        <LinearGradient
          colors={['#848AF28C', '#5A61C9FF']}
          style={styles.linearGradient}>
          <Text style={styles.btntext}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.loginlink}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={{ color: '#C58BF2' }}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
  },
  fname: {
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
  lname: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  para1: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(4),
  },

  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(6),
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(6),
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',
  },
  flogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },
  llogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },
  elogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },
  plogo: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2.4),
    marginRight: responsiveWidth(3),
  },

  loginlink: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(25),
    marginTop: responsiveHeight(3),
  },
  checkb: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(2),
  },
  checktext: {
    fontSize: responsiveFontSize(1.4),
    color: 'grey',
    marginTop: responsiveHeight(1.8),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(20),
    fontFamily: 'poppins',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margintop: responsiveHeight(5),
  },
});
