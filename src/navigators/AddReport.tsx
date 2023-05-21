import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddReportStackParamList } from '../../@type/navigators';
import Home from '../screens/Home';
import NewReport from '../screens/NewReport';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<AddReportStackParamList>();

const AddReportNavigator = function() {
  const { t } = useTranslation(['homeScreen']);

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
          headerTitle: t('homeScreen:reportIncident'),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default AddReportNavigator;