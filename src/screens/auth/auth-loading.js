import React from 'react';
import { shape, func } from 'prop-types';
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

export default class AuthLoading extends React.Component {
  static propTypes = {
    navigation: shape({
      navigate: func.isRequired,
    }).isRequired,
  };

  checkToken = async () => {
    // const token = await AsyncStorage.getItem('token');
    const token = null;
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  componentDidMount = () => this.checkToken();

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#3F87F5" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
