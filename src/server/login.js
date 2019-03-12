import { AsyncStorage } from 'react-native';
import request from './request';

export default async function (email, pwd) {
  try {
    const response = await request('login', 'POST', false, { email, pwd });
    await AsyncStorage.setItem('token', response.token);
  } catch (error) {
    alert(error);
  }
}
