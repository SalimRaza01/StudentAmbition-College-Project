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
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen(props) {
  const navigation = useNavigation();

  const [isConnected, setIsConnected] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Load the stored email and password from AsyncStorage
  useEffect(() => {
    loadStoredCredentials();
  }, []);

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('pass', pass);
    } catch (error) {
      console.log('Error saving credentials:', error);
    }
  };

  const loadStoredCredentials = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPass = await AsyncStorage.getItem('pass');

      if (storedEmail && storedPass) {
        setEmail(storedEmail);
        setPass(storedPass);
        setIsChecked(true);
      }
    } catch (error) {
      console.log('Error loading stored credentials:', error);
    }
  };

  const clearStoredCredentials = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('pass');
    } catch (error) {
      console.log('Error clearing stored credentials:', error);
    }
  };

  const signIn = () => {
    if (!isConnected) {
      alert('No internet connection');
      return;
    }

    signInWithEmailAndPassword(auth, email, pass)
      .then(userCredential => {
        if (isChecked) {
          saveCredentials();
        } else {
          clearStoredCredentials();
        }
        navigation.replace('CompleteReg');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Invalid');
      });
  };

  const resetPassword = () => {
    if (email.trim() !== '') {
      // Check if the email has a valid format using regular expressions
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        // Perform the password reset functionality
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert('Password reset email sent!');
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Failed to send password reset email.');
          });
      } else {
        alert('Please enter a valid email');
      }
    } else {
      alert('Please enter an email');
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.trim() === '') {
      setEmailError('');
    } else if (!emailRegex.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };

  const handlePassChange = text => {
    const passtrim = text.trim();
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (passtrim === '') {
      setPassError('');
    } else if (!passRegex.test(text)) {
      setPassError('Weak Password');
    } else {
      setPassError('');
    }
    setPass(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />

      <Text style={styles.para1}> Login </Text>

      <View style={styles.email}>
        <Image style={styles.elogo} source={require('../assets/Message.png')} />
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

      <View style={styles.pass}>
        <Image style={styles.plogo} source={require('../assets/Lock.png')} />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          color="black"
          value={pass}
          onChangeText={handlePassChange}
          secureTextEntry={!passwordVisible} 
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.eyeIcon}
            source={
              passwordVisible
                ? require('../assets/HidePassword.png')
                : require('../assets/ShowPassword.png')
            }
          />
        </TouchableOpacity>
      </View>
      {passError ? <Text style={styles.error}>{passError}</Text> : null}

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={toggleCheckbox}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Keep me logged in</Text>
      </View>

      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          resetPassword();
        }}>
        <Text
          style={{
            color: 'blue',
            fontSize: responsiveFontSize(1.4),
            fontFamily: 'poppins',
          }}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mybtn}
        onPress={() => {
          signIn();
        }}>
        <LinearGradient
          colors={['#848AF28C', '#5A61C9FF']}
          style={styles.linearGradient}>
          <Text style={styles.btntext}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.loginlink}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Registration')}>
          <Text style={{ color: 'blue' }}> Create New </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({


  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(6),
  },
  linearGradient: {
    flex: 1,
    borderRadius: 25,
    justifyContent: "center",
  },
  logo: {
    position: 'absolute',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    // marginLeft: responsiveWidth(15),
    marginTop: responsiveHeight(15),
    alignSelf: 'center',
  },
  para1: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: '#5A61C9',
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(38),
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    borderWidth: 1,
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
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
  login: {
    marginLeft: responsiveWidth(63),
    marginTop: responsiveHeight(-2.8),
  },
  mybtn: {
    backgroundColor: '#92A3FD',
    borderRadius: 30,
    width: responsiveWidth(80),
    height: responsiveHeight(6.8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(10),
  },
  btntext: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margintop: responsiveHeight(5),
  },
  label: {
    fontSize: responsiveFontSize(1.4),
    color: 'grey',
    marginTop: responsiveHeight(0.2),
    fontFamily: 'poppins',
  },
  eyeIcon : {
    marginLeft: responsiveWidth(40),
    marginTop: responsiveHeight(2.2),
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
  }
});
