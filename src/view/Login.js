import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {setEmail} from '../redux/action/loginAction';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const [text1, setText1] = useState('');
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.loginData);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        onChangeText={setText1}
        value={text1}
        placeholder="Text"
      />
      <TouchableOpacity
        onPress={() => {
          console.log('dssvdfvvrd');
          dispatch(setEmail(text1));
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>{loginData.email}</Text>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
