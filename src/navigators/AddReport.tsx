import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddReportStackParamList } from '../../@type/navigators';
import Home from '../screens/Home';
import NewReport from '../screens/NewReport';

const Stack = createNativeStackNavigator<AddReportStackParamList>();

const AddReportNavigator = function() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name='NewReport' 
        component={NewReport} 
        options={{
          headerTitle: 'Report an Incident',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default AddReportNavigator;