import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toolbar from '../../components/toolbar';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default class Shop extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Toolbar title="Shop" />
      </View>
    );
  }
}
