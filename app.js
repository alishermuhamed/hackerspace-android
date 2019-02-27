import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { Dimensions } from 'react-native';
import {
  Profile, Leaderboard, Hackathons, Shop,
} from './src/screens/app';
import {
  SignIn, SignUp, ForgotPassword, AuthLoading,
} from './src/screens/auth';

const AppDrawerStack = createDrawerNavigator(
  {
    Profile,
    Leaderboard,
    Hackathons,
    Shop,
  }, {
    drawerWidth: Dimensions.get('window').width,
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    ForgotPassword,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppDrawerStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
