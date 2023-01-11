import React from 'react';
import {View} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
function LoginComponent() {
  return (
    <View>
      <TextInput label="Password" right={<TextInput.Icon icon="eye" />} />
      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button
        
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  );
}

export default LoginComponent;
