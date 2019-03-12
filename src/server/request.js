import { AsyncStorage } from 'react-native';

export default async function (endpoint, method, isSecured, params = {}) {
  let url = `https://facepalm.host/api/${endpoint}`;
  const request = { method, headers: {} };
  if (isSecured) {
    try {
      const token = await AsyncStorage.getItem('token');
      request.headers.Authorization = token;
    } catch (error) {
      alert(error);
    }
  }
  switch (method) {
    case 'GET':
      url += '?';
      url += Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
      break;
    case 'POST':
      request.headers['Content-Type'] = 'application/json';
      request.body = JSON.stringify(params);
      break;
    default: return;
  }
  try {
    const response = await fetch(url, request);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    alert(error);
  }
}
