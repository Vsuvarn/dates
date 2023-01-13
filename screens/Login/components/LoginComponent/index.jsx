import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import {heightToDp, widthToDp} from '../../../styles';
import style from './style';
import {LOGINactions} from '../../../../Redux/Reducer/authReducer'
import {loginACTION} from '../../../../Redux/Actions/inedx'
const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '');
  return str.trim();
}
const nameValidator = name => {
  name = sanitizeString(name);
  if (!name || name.length <= 0) return 'Username cannot be empty.';

  return '';
};
function LoginComponent() {
  const [username, setUsername] = useState({value: '', error: ''});
  const usernameRef = useRef({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const passwordRef = useRef({value: '', error: ''});
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const state = useSelector(state=>state.authReducer)
  const dispatch = useDispatch()
  const _onLoginPressed = () => {
    const usernameError = nameValidator(usernameRef.current.value);
    const passwordError = passwordValidator(passwordRef.current.value);
    
    console.log('first1')

    if (usernameError || passwordError) {
      setUsername({...username, error: usernameError});
      setPassword({...password, error: passwordError});

      // return;
    }
    else {
      console.log('first2')
      dispatch(
        loginACTION({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      );
    }
  };
  return (
    <View style={style.inputContainer}>
      <View style={{width: '100%'}}>
        <TextInput
          label="Email"
          left={<TextInput.Icon icon="email" />}
          onChangeText={text => usernameRef.current = { value: text, error: '' }}

          selectionColor={'#F5BB01'}
          mode="flat"
          error={username.error}
          errorText={username.error}
          underlineColor={'#ECECEC00'}
          activeUnderlineColor={'#F5BB0100'}
          style={[style.inputStyle, {borderColor: '#E1E1E1'}]}
        />
      </View>

      <View style={style.spacing}>
        <TextInput
          label="Password"
          secureTextEntry
          left={<TextInput.Icon icon="key" />}
          onChangeText={text => passwordRef.current = { value: text, error: '' }}

          error={password.error}
          errorText={password.error}
          mode="flat"
          selectionColor={'#F5BB01'}
          underlineColor={'#ECECEC00'}
          activeUnderlineColor={'#00000000'}
          style={[style.inputStyle,{borderColor: '#E1E1E1'}]}
        />
      </View>

      <View style={style.spacing}>
        <Button
          mode="contained"
          onPress={_onLoginPressed}
          style={{
            backgroundColor: '#F5BB01',
            height: heightToDp(7),
            borderRadius: heightToDp(7),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          labelStyle={{width:'90%',borderWidth:0,salignSelf:'center',}}
          >
          <Text variant="titleMedium" style={{color: '#FFFFFF'}}>
            LOGIN
          </Text>
        </Button>
      </View>
    </View>
  );
}

export default LoginComponent;
