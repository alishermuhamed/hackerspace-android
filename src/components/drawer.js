import React from 'react';
import { shape, func } from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerItems, withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#3F87F5',
  },
  closeButton: {
    marginTop: 20,
    marginLeft: 20,
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
          <Icon name="times" size={30} color="#FFFFFF" style={styles.closeButton} />
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
