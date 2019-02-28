import React from 'react';
import {
  StyleSheet, View, TouchableNativeFeedback, Image,
} from 'react-native';
import { shape, func } from 'prop-types';
import { DrawerItems, withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#3F87F5',
  },
});

class Drawer extends React.Component {
  static propTypes = {
    navigation: shape({
      closeDrawer: func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <View style={styles.view}>
        <TouchableNativeFeedback onPress={this.props.navigation.closeDrawer}>
          <Image source={require('../icons/close.png')} />
        </TouchableNativeFeedback>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

export default withNavigation(Drawer);
