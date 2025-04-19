// components/EmergencyTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmergencyDoctor from './Emergency';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomTabBar from './CustomTabBar'; 
import Prescription from './PrescriptionScreen';

const Tab = createBottomTabNavigator();

const EmergencyTabs = () => {
  return (
<Tab.Navigator
  tabBar={(props) => <CustomTabBar {...props} />} 
  screenOptions={{
    headerShown: false,
  }}
>
  <Tab.Screen name="Home" component={EmergencyDoctor} />
  <Tab.Screen name="Docs" component={Prescription} />
  <Tab.Screen name="Emergency" component={EmergencyDoctor} />
  <Tab.Screen name="Chat" component={ChatScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>

  );
};

export default EmergencyTabs;
