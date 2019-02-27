import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/header';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default class Leaderboard extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Header title="Leaderboard" />
      </View>
    );
  }
}
