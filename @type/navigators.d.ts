import { NavigatorScreenParams } from '@react-navigation/native';
import { NavtiveStackScreenProps } from '@react-navigation/native-stack';

export type MainBottomTabParamsList = {
  Home: undefined;
  Reports: undefined;
  Stats: undefined;
  Settings: undefined;
};

export type ApplicationStackParamList = {
  Login: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  NavtiveStackScreenProps<ApplicationStackParamList>;
