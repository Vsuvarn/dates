import React from 'react';
import {View,Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
function Header({ navigation, previous }) {
  const routes = useRoute()
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <Appbar.Header mode="center-aligned">
      <View style={{height: '80%', width: '15%', justifyContent:'center',alignItems: 'center'}}>
        <Image source={require('../../../assets/ic_notification_normal.png')} resizeMode='contain' style={{height: '60%',aspectRatio:1}}/>
      </View>
      <Appbar.Content title={routes.name} />

      <View style={{height: '80%', width: '15%', justifyContent:'center',alignItems: 'center'}}>
      <Image source={require('../../../assets/ic_icon_addfeed.png')} resizeMode='contain' style={{height: '60%',aspectRatio:1}}/>
      </View>
    </Appbar.Header>
  );
}

export default Header;
