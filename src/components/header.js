import React from 'react';
import { shape, func, string } from 'prop-types';
import { StyleSheet, ToolbarAndroid } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#3F87F5',
  },
});

class Header extends React.Component {
  static propTypes = {
    navigation: shape({
      openDrawer: func.isRequired,
    }).isRequired,
    title: string.isRequired,
  };

  render() {
    const { navigation, title } = this.props;
    const { openDrawer } = navigation;
    return (
      <ToolbarAndroid
        style={styles.toolbar}
        title={title}
        titleColor="#FFFFFF"
        navIcon={require('../icons/menu.png')}
        onIconClicked={openDrawer}
      />
    );
  }
}

export default withNavigation(Header);
