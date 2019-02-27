import {
  createDrawerNavigator, createStackNavigator, createSwitchNavigator, createAppContainer,
} from 'react-navigation';
import {
  Profile, Leaderboard, Hackathons, Shop,
} from './src/screens/app';
import {
  SignIn, SignUp, ForgotPassword, AuthLoading,
} from './src/screens/auth';

const AppNavigator = createDrawerNavigator({
  Profile,
  Leaderboard,
  Hackathons,
  Shop,
});

const AuthNavigator = createStackNavigator({
  SignIn,
  SignUp,
  ForgotPassword,
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
