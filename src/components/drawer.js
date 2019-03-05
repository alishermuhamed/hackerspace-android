import React from 'react';
import { shape, func } from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
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
        <TouchableNativeFeedback
          onPress={this.props.navigation.closeDrawer}
        >
          <Image
            source={require('../icons/close.png')}
            style={{ marginTop: 15, marginLeft: 15 }}
          />
        </TouchableNativeFeedback>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

export const DrawerWithNavigation = withNavigation(Drawer);
export const drawerOptions = {
  activeTintColor: '#FFFFFF',
  activeBackgroundColor: '#3F87F5',
  inactiveTintColor: '#FFFFFF',
  itemsContainerStyle: {
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 20,
  },
};
