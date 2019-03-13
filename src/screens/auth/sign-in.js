import React from 'react';
import { shape, func } from 'prop-types';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableNativeFeedback,
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../server';

const styles = StyleSheet.create({
  view: {
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  telegramButton: {
    marginTop: 10,
    backgroundColor: '#3F87F5',
    borderRadius: 30,
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#FFFFFF',
    marginVertical: 10,
  },
  credentialsHint: {
    fontWeight: 'bold',
    color: '#53535F',
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    padding: 0,
    borderColor: '#979797',
    borderBottomWidth: 1,
    width: '80%',
  },
  forgotPassword: {
    marginTop: 20,
    color: '#979797',
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#3F87F5',
    width: '80%',
    alignItems: 'center',
  },
  signUp: {
    marginTop: 20,
  },
});

export default class SignIn extends React.Component {
  static propTypes = {
    navigation: shape({
      navigate: func.isRequired,
    }).isRequired,
  };

  state = {
    email: '',
    pwd: '',
  };

  handleLogin = async () => {
    const { email, pwd } = this.state;
    try {
      await login(email, pwd);
      this.props.navigation.navigate('App');
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { navigation } = this.props;
    const { email, pwd } = this.state;
    return (
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={styles.view}>
          <Icon name="user" size={100} color="#3F87F5" />
          <TouchableNativeFeedback onPress={() => alert('Log in with Telegram')}>
            <View style={styles.telegramButton}>
              <Text style={styles.buttonText}>Log in with Telegram</Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.credentialsHint}>Or enter your login credentials to get access:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="Email address"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={pwd}
            onChangeText={text => this.setState({ pwd: text })}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableNativeFeedback onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.handleLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>Do not have an account? Sign up</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
