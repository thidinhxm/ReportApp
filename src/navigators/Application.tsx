import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from '../../@type/navigators';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Login from '../screens/Login';
import MainNavigator from './Main';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = function() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Main' component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
};

export default ApplicationNavigator;