import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/view/Login';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Login />
      </View>
    </Provider>
  );
};

export default App;
