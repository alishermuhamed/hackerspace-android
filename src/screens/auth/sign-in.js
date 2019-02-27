import React from 'react';
import { shape, func } from 'prop-types';
import { View, Text, Button } from 'react-native';

export default class SignIn extends React.Component {
  static propTypes = {
    navigation: shape({
      navigate: func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign In Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate('App')} />
        <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    );
  }
}
