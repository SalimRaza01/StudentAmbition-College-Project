import SplashScreen from './components/SplashScreen';
import Registration from './components/Registration';
import Login from './components/Login';
import SelectPrefer from './components/SelectPrefer';
import CompleteReg from './components/CompleteReg';
import AboutPage from './components/AboutPage';
import Subject1 from './components/Subject1';
import SubjectCS2 from './components/SubjectCS2';
import SubjectCS3 from './components/SubjectCS3';
import SubjectCS4 from './components/SubjectCS4';
import SubjectCivil2 from './components/SubjectCivil2';
import SubjectCivl3 from './components/SubjectCivil3';
import SubjectCivil4 from './components/SubjectCivil4';
import SubjectECE2 from './components/SubjectECE2';
import SubjectECE3 from './components/SubjectECE3';
import SubjectECE4 from './components/SubjectECE4';
import SubjectEE2 from './components/SubjectEE2';
import SubjectEE3 from './components/SubjectEE3';
import SubjectEE4 from './components/SubjectEE4';
import SubjectME2 from './components/SubjectME2';
import SubjectME3 from './components/SubjectME3';
import SubjectME4 from './components/SubjectME4';

import LCE2 from './components/LCE2';
import LCE3 from './components/LCE3';
import LCE4 from './components/LCE4';
import LCS2 from './components/LCS2';
import LCS3 from './components/LCS3';
import LCS4 from './components/LCS4';
import LEE2 from './components/LEE2';
import LEE3 from './components/LEE3';
import LEE4 from './components/LEE4';
import LECE2 from './components/LECE2';
import LECE3 from './components/LECE3';
import LECE4 from './components/LECE4';
import LME2 from './components/LME2';
import LME3 from './components/LME3';
import LME4 from './components/LME4';
import QCE2 from './components/QCE2';
import QCE3 from './components/QCE3';
import QCE4 from './components/QCE4';
import QCS2 from './components/QCS2';
import QCS3 from './components/QCS3';
import QCS4 from './components/QCS4';
import QEE2 from './components/QEE2';
import QEE3 from './components/QEE3';
import QEE4 from './components/QEE4';
import QECE2 from './components/QECE2';
import QECE3 from './components/QECE3';
import QECE4 from './components/QECE4';
import QME2 from './components/QME2';
import QME3 from './components/QME3';
import QME4 from './components/QME4';
import Q1 from './components/Q1';
import L1 from './components/L1';
import AS from './components/AS';
import Coding from './components/Coding';
import Placement from './components/Placement';
import Internship from './components/Internship';
import Home from './components/Home';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check the user's authentication status from AsyncStorage
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const pass = await AsyncStorage.getItem('pass');

      const isAuthenticated = email !== null && pass !== null;

      setIsAuthenticated(isAuthenticated);

      // if (isAuthenticated) {
      //   // User is authenticated, navigate to the home screen

      // }
    } catch (error) {
      console.log('Error retrieving credentials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Render the navigation container and stack navigator
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SelectPrefer" component={SelectPrefer} />
            <Stack.Screen name="L1" component={L1} />
            <Stack.Screen name="AboutPage" component={AboutPage} />
            <Stack.Screen name="Subject1" component={Subject1} />
            <Stack.Screen name="Internship" component={Internship} />
            <Stack.Screen name="Placement" component={Placement} />
            <Stack.Screen name="LCS2" component={LCS2} />
            <Stack.Screen name="LCS3" component={LCS3} />
            <Stack.Screen name="LCS4" component={LCS4} />
            <Stack.Screen name="LCE2" component={LCE2} />
            <Stack.Screen name="LCE3" component={LCE3} />
            <Stack.Screen name="LCE4" component={LCE4} />
            <Stack.Screen name="LECE2" component={LECE2} />
            <Stack.Screen name="LECE3" component={LECE3} />
            <Stack.Screen name="LECE4" component={LECE4} />
            <Stack.Screen name="LEE2" component={LEE2} />
            <Stack.Screen name="LEE3" component={LEE3} />
            <Stack.Screen name="LEE4" component={LEE4} />
            <Stack.Screen name="LME2" component={LME2} />
            <Stack.Screen name="LME3" component={LME3} />
            <Stack.Screen name="LME4" component={LME4} />
            <Stack.Screen name="QCS2" component={QCS2} />
            <Stack.Screen name="QCS3" component={QCS3} />
            <Stack.Screen name="QCS4" component={QCS4} />
            <Stack.Screen name="QCE2" component={QCE2} />
            <Stack.Screen name="QCE3" component={QCE3} />
            <Stack.Screen name="QCE4" component={QCE4} />
            <Stack.Screen name="QECE2" component={QECE2} />
            <Stack.Screen name="QECE3" component={QECE3} />
            <Stack.Screen name="QECE4" component={QECE4} />
            <Stack.Screen name="QEE2" component={QEE2} />
            <Stack.Screen name="QEE3" component={QEE3} />
            <Stack.Screen name="QEE4" component={QEE4} />
            <Stack.Screen name="QME2" component={QME2} />
            <Stack.Screen name="QME3" component={QME3} />
            <Stack.Screen name="QME4" component={QME4} />
            <Stack.Screen name="Q1" component={Q1} />
            <Stack.Screen name="AS" component={AS} />
            <Stack.Screen name="Coding" component={Coding} />
            <Stack.Screen name="SubjectCS2" component={SubjectCS2} />
            <Stack.Screen name="SubjectCS3" component={SubjectCS3} />
            <Stack.Screen name="SubjectCS4" component={SubjectCS4} />
            <Stack.Screen name="SubjectCivil2" component={SubjectCivil2} />
            <Stack.Screen name="SubjectCivil3" component={SubjectCivl3} />
            <Stack.Screen name="SubjectCivil4" component={SubjectCivil4} />
            <Stack.Screen name="SubjectECE2" component={SubjectECE2} />
            <Stack.Screen name="SubjectECE3" component={SubjectECE3} />
            <Stack.Screen name="SubjectECE4" component={SubjectECE4} />
            <Stack.Screen name="SubjectEE2" component={SubjectEE2} />
            <Stack.Screen name="SubjectEE3" component={SubjectEE3} />
            <Stack.Screen name="SubjectEE4" component={SubjectEE4} />
            <Stack.Screen name="SubjectME2" component={SubjectME2} />
            <Stack.Screen name="SubjectME3" component={SubjectME3} />
            <Stack.Screen name="SubjectME4" component={SubjectME4} />
          </Stack.Group>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Registration" component={Registration} />
              <Stack.Screen name="CompleteReg" component={CompleteReg} />
              <Stack.Screen name="SelectPrefer" component={SelectPrefer} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="L1" component={L1} />
              <Stack.Screen name="AboutPage" component={AboutPage} />
              <Stack.Screen name="Subject1" component={Subject1} />
              <Stack.Screen name="Internship" component={Internship} />
              <Stack.Screen name="Placement" component={Placement} />
              <Stack.Screen name="LCS2" component={LCS2} />
              <Stack.Screen name="LCS3" component={LCS3} />
              <Stack.Screen name="LCS4" component={LCS4} />
              <Stack.Screen name="LCE2" component={LCE2} />
              <Stack.Screen name="LCE3" component={LCE3} />
              <Stack.Screen name="LCE4" component={LCE4} />
              <Stack.Screen name="LECE2" component={LECE2} />
              <Stack.Screen name="LECE3" component={LECE3} />
              <Stack.Screen name="LECE4" component={LECE4} />
              <Stack.Screen name="LEE2" component={LEE2} />
              <Stack.Screen name="LEE3" component={LEE3} />
              <Stack.Screen name="LEE4" component={LEE4} />
              <Stack.Screen name="LME2" component={LME2} />
              <Stack.Screen name="LME3" component={LME3} />
              <Stack.Screen name="LME4" component={LME4} />
              <Stack.Screen name="QCS2" component={QCS2} />
              <Stack.Screen name="QCS3" component={QCS3} />
              <Stack.Screen name="QCS4" component={QCS4} />
              <Stack.Screen name="QCE2" component={QCE2} />
              <Stack.Screen name="QCE3" component={QCE3} />
              <Stack.Screen name="QCE4" component={QCE4} />
              <Stack.Screen name="QECE2" component={QECE2} />
              <Stack.Screen name="QECE3" component={QECE3} />
              <Stack.Screen name="QECE4" component={QECE4} />
              <Stack.Screen name="QEE2" component={QEE2} />
              <Stack.Screen name="QEE3" component={QEE3} />
              <Stack.Screen name="QEE4" component={QEE4} />
              <Stack.Screen name="QME2" component={QME2} />
              <Stack.Screen name="QME3" component={QME3} />
              <Stack.Screen name="QME4" component={QME4} />
              <Stack.Screen name="Q1" component={Q1} />
              <Stack.Screen name="AS" component={AS} />
              <Stack.Screen name="Coding" component={Coding} />
              <Stack.Screen name="SubjectCS2" component={SubjectCS2} />
              <Stack.Screen name="SubjectCS3" component={SubjectCS3} />
              <Stack.Screen name="SubjectCS4" component={SubjectCS4} />
              <Stack.Screen name="SubjectCivil2" component={SubjectCivil2} />
              <Stack.Screen name="SubjectCivil3" component={SubjectCivl3} />
              <Stack.Screen name="SubjectCivil4" component={SubjectCivil4} />
              <Stack.Screen name="SubjectECE2" component={SubjectECE2} />
              <Stack.Screen name="SubjectECE3" component={SubjectECE3} />
              <Stack.Screen name="SubjectECE4" component={SubjectECE4} />
              <Stack.Screen name="SubjectEE2" component={SubjectEE2} />
              <Stack.Screen name="SubjectEE3" component={SubjectEE3} />
              <Stack.Screen name="SubjectEE4" component={SubjectEE4} />
              <Stack.Screen name="SubjectME2" component={SubjectME2} />
              <Stack.Screen name="SubjectME3" component={SubjectME3} />
              <Stack.Screen name="SubjectME4" component={SubjectME4} />
            </Stack.Group>
          </>

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


