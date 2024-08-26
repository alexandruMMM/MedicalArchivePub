import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/Screens/HomeScreen';
import { Text } from 'react-native';
import { TopTabParamList  } from '../assets/types';
import SettingsScreen from '@/app/Screens/SettingsScreen';
import SyncScreen from '@/app/Screens/SyncScreen';

const Tab = createBottomTabNavigator<TopTabParamList >();

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: 'black' },
      tabBarLabelStyle: { color: 'white' }
    }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: () => <Text>🏠</Text>,
      }}
    />
    <Tab.Screen
      name="Sincronizare"
      component={SyncScreen}
      options={{
        tabBarIcon: () => <Text>🔄</Text>,
      }}
    />
    <Tab.Screen
      name="Setari"
      component={SettingsScreen}
      options={{
        tabBarIcon: () => <Text>⚙️</Text>,
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
