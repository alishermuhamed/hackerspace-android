import React from 'react';
import { shape, func } from 'prop-types';
import { View, Text, Button } from 'react-native';

export default class Profile extends React.Component {
  static propTypes = {
    navigation: shape({
      navigate: func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Logout" onPress={() => navigation.navigate('Auth')} />
      </View>
    );
  }
}
