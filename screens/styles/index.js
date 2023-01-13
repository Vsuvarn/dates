import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
export const fullScreenWidth = Dimensions.get('screen').width;
export const fullScreenHeight = Dimensions.get('screen').height;

//---------------------for response---------------------------------
export const widthToDp = num => {
  let givenWidth = typeof num === 'number' ? num : parseFloat(num);
  return PixelRatio.roundToNearestPixel((fullScreenWidth * givenWidth) / 100);
};
export const heightToDp = num => {
  let givenHeight = typeof num === 'number' ? num : parseFloat(num);
  return PixelRatio.roundToNearestPixel((fullScreenHeight * givenHeight) / 100);
};
//----------------------------------------------------------------
export default StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImg: {
    width: '130%',
    height: '130%',
    resizeMode: 'contain',
  },
  splashIcon: {
    // width: heightToDp500,
    height: heightToDp(50),
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  loginIcon: {
    // width: heightToDp500,
    height: heightToDp(35),
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  loginContainer: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopRightRadius: widthToDp(10),
    borderTopLeftRadius: widthToDp(10),
    paddingVertical: heightToDp(2),
    // borderWidth: 1,
  },
  tumbnail: {
    height: heightToDp(8),
    aspectRatio: 1,
    borderRadius: 10,
    // borderWidth: 2,
    overflow: 'hidden',
    // borderColor: '#FFFFFF',
  },
});
