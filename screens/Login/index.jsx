import React from 'react';
import {View, Image,KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-paper';
import LoginComponent from './components/LoginComponent'
import Styles from '../styles';

function Login() {
  return (
    <>
      <View style={Styles.splashContainer}>
        <Image
          source={require('../../assets/background.png')}
          style={Styles.bgImg}
        />
       
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            height: '100%',
            width: '100%',
            borderWidth: 1,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
             <KeyboardAvoidingView>
          <Image
            source={require('../../assets/app_icon.png')}
            style={Styles.loginIcon}
          />
          <View style={Styles.loginContainer}>
            <Text variant="titleMedium">Welcome Back!</Text>
                <LoginComponent/>
                <View style={{width: '100%', height:100,borderWidth:1,}}>

                <Text variant="bodyMedium">Welcome Back!</Text>
                </View>
          </View>
           </KeyboardAvoidingView>
        </View>
       
      </View>
    </>
  );
}

export default Login;
