import React from 'react';
import {View, Image} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import styles, {heightToDp, widthToDp} from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
const Tumbnail = () => {
  return (
    <View style={styles.tumbnail}>
      <Image
        source={{uri: 'https://i.pravatar.cc/300'}}
        style={styles.tumbnail}
        resizeMode="contain"
      />
    </View>
  );
};
function Card() {
  return (
    <>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor:'#00000022',
          height: heightToDp(50),
          width: '100%',
          padding: '3%',
        }}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Tumbnail />
          <View style={{marginLeft: '5%',flex:1}}>
            <Text variant="titleSmall">Title Small</Text>
            <Text variant="bodySmall">Body Small</Text>
          </View>
          <IconM name="dots-vertical" size={25}  />
        </View>
        <View style={{paddingVertical:heightToDp(1)}}>
            <Text variant="bodyMedium">Body Medium</Text>
        </View>
        <View style={{height:heightToDp(28),width:'100%'}}>
            <Image source={require('../../../../assets/img1.jpg')} style={{height:heightToDp(28),width:'100%'}} resizeMode='contain' />
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
           <IconA name="like2" size={30} />
           <IconI name="chatbubbles-outline" size={30} />
        </View>
      </View>
    </>
  );
}

export default Card;
