import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { func, number, string } from 'prop-types';
import { events } from '../server';

const styles = StyleSheet.create({
  view: {
    height: 200,
    backgroundColor: '#979797',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  background: {
    flex: 1,
    resizeMode: 'stretch',
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
    marginTop: 70,
    width: '30%',
    alignItems: 'center',
  },
  blueButton: {
    backgroundColor: '#3F87F5',
  },
  redButton: {
    backgroundColor: '#D0021B',
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
    getEvents: func.isRequired,
    id: number.isRequired,
    title: string.isRequired,
    city: string,
    dateStart: string.isRequired,
    preview: string,
    status: string.isRequired,
  };

  handleButtonPress = async () => {
    const { getEvents, id, status } = this.props;
    if (status === 'open') {
      try {
        await events.apply(id);
        alert('You successfully applied to the hackathon');
        await getEvents();
      } catch (error) {
        alert(error);
      }
    }
  };

  renderButton = () => {
    const { status } = this.props;
    let buttonText = '';
    const buttonStyle = [styles.button];
    if (status === 'won' || status === 'participated') return;
    if (status === 'open') {
      buttonText = 'Apply';
      buttonStyle.push(styles.blueButton);
    } else {
      buttonStyle.push(styles.redButton);
      if (status === 'activated') buttonText = 'I\'m out';
      else buttonText = 'I can\'t go';
    }
    return (
      <TouchableNativeFeedback
        onPress={this.handleButtonPress}
      >
        <View style={buttonStyle}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };

  render() {
    const {
      title,
      city,
      dateStart,
      preview,
    } = this.props;
    const date = new Date(...dateStart.substring(0, 10).split('-'));
    return (
      <View style={styles.view}>
        <ImageBackground source={{ uri: preview }} style={styles.background}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{city}</Text>
          <Text style={styles.text}>{date.toDateString()}</Text>
          {this.renderButton()}
        </ImageBackground>
      </View>
    );
  }
}
