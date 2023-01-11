import React from 'react';
import {View,Image} from 'react-native';
import Styles,{} from '../styles'
function Splash() {
  return(
    <>
      <View style={Styles.splashContainer}>
        <Image source={require('../../assets/background.png')} style={Styles.bgImg}/>
        <View style={{position: 'absolute',zIndex:1}} >
          
        <Image source={require('../../assets/app_icon.png')} style={Styles.splashIcon}/>
        </View>
      </View>
    </>
  );
}

export default Splash;
