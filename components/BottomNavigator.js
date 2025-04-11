import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import HomePage from "./HomePage";
// import RecordsScreen from './screens/RecordsScreen';
// import ScanScreen from './screens/ScanScreen';
import ChatScreen from "./ChatScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.customButton}>
    <View style={styles.customButtonInner}>{children}</View>
  </TouchableOpacity>
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#00AEEF" : "#ccc"}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Records"
        component={RecordsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="file-text" size={24} color={focused ? '#00AEEF' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="maximize-2" size={26} color="#fff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      /> */}
      {/* <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="chatbubble-outline" size={24} color={focused ? '#00AEEF' : '#ccc'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="user" size={24} color={focused ? '#00AEEF' : '#ccc'} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customButton: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00AEEF",
    justifyContent: "center",
    alignItems: "center",
  },
});
