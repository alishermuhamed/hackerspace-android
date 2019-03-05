import React from 'react';
import { StyleSheet } from 'react-native';
import { shape, func, string } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#3F87F5',
  },
});

class Toolbar extends React.Component {
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
      <Icon.ToolbarAndroid
        style={styles.toolbar}
        title={title}
        titleColor="#FFFFFF"
        navIconName="bars"
        onIconClicked={openDrawer}
      />
    );
  }
}

export default withNavigation(Toolbar);
