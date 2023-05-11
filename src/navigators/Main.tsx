import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainBottomTabParamsList } from "../../@type/navigators";
import Home from "../screens/Home";
import Reports from "../screens/Reports";
import Stats from "../screens/Stats";
import Settings from "../screens/Settings";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../constants/styles";
import AddReportNavigator from "./AddReport";

const BottomTab = createBottomTabNavigator<MainBottomTabParamsList>();

function MainNavigator() {
  const { t } = useTranslation(['tabBar']);
  return (
    <BottomTab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarActiveTintColor: GlobalStyles.colors.blue500,
        tabBarInactiveTintColor: GlobalStyles.colors.black,
      }}
    >
      <BottomTab.Screen 
        name='AddReport' 
        component={AddReportNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={25} color={color}/>
          ),
          tabBarLabel: t('tabBar:home')
        }}
      />
      <BottomTab.Screen 
        name='Reports' 
        component={Reports}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='documents' size={25} color={color}/>
          ),
          tabBarLabel: t('tabBar:reports')
        }}
      />
      <BottomTab.Screen 
        name='Stats' 
        component={Stats}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='stats-chart' size={25} color={color}/>
          ),
          tabBarLabel: t('tabBar:stats')
        }}
      />
      <BottomTab.Screen 
        name='Settings' 
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='settings' size={25} color={color}/>
          ),
          tabBarLabel: t('tabBar:settings')
        }}
      />
    </BottomTab.Navigator>
  )
}

export default MainNavigator;
