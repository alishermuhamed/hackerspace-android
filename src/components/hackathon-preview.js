import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { string } from 'prop-types';

const styles = StyleSheet.create({
  view: {
    height: 200,
    backgroundColor: '#979797',
    borderBottomWidth: 1,
    borderColor: '#000000',
    padding: 15,
  },
  text: {
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { height: 3 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3F87F5',
    marginTop: 70,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
    margin: 5,
  },
});

export default class HackathonPreview extends React.Component {
  static propTypes = {
    title: string.isRequired,
    city: string,
    dateStart: string.isRequired,
  };

  render() {
    const {
      title,
      city,
      dateStart,
    } = this.props;
    const date = new Date(...dateStart.substring(0, 10).split('-'));
    return (
      <View style={styles.view}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={styles.text}>{city}</Text>
        <Text style={styles.text}>{date.toDateString()}</Text>
        <TouchableNativeFeedback
          onPress={() => alert('Applied to hackathon!')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Apply</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
