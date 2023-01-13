import React from 'react';
import {View, Image,KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-paper';
import LoginComponent from './components/LoginComponent'
import Styles, { heightToDp } from '../styles';

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
             <>
          <Image
            source={require('../../assets/app_icon.png')}
            style={Styles.loginIcon}
          />
          <View style={Styles.loginContainer}>
            <Text variant="titleMedium">Welcome Back!</Text>
                <LoginComponent/>
                <View style={{width: '100%',justifyContent:'center',alignItems: 'center',marginTop:heightToDp(5)}}>
                  <Text variant="titleMedium" style={{color:'#C4C5C5'}}>Forgot Password?</Text>
                  <Text variant="titleMedium" style={{marginTop:heightToDp(3)}}>Don't have account? <Text variant="titleMedium" style={{color:'#F5BB01'}}>Create New</Text></Text>
                </View>
          </View>
           </>
        </View>
       
      </View>
    </>
  );
}

export default Login;
