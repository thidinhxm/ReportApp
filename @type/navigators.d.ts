import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainBottomTabParamsList = {
  AddReport: undefined;
  Reports: undefined;
  Stats: undefined;
  Settings: undefined;
  Login: undefined,
};

export type ApplicationStackParamList = {
  Login: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  NativeStackScreenProps<ApplicationStackParamList>;

export type AddReportStackParamList = {
  Home: undefined;
  NewReport: undefined;
}

export type AddReportScreenProps = 
  NativeStackScreenProps<AddReportStackParamList>;

export type MainBottomTabScreenProps =
  BottomTabScreenProps<MainBottomTabParamsList>;
