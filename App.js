import react from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

// import AppNavigator from './components/BottomNavigator';

import DoctorListScreen from "./components/DoctorListScreen";
import BookAppointment from "./components/BookAppointment";
import ProfileScreen from "./components/ProfileScreen";
import ChatScreen from "./components/ChatScreen";
import Prescription from "./components/PrescriptionScreen";
import LoadingScreen from "./components/LoadingScreen";
import StartingScreen from "./components/StartingScreen";
import About from "./components/About";
import ChatDrScreen from "./components/chatDr";
import HomePage from "./components/HomePage";
import GetStarted from "./components/GetStarted";
import SignInScreen from "./components/SignIn";
import SignUpScreen from "./components/SignUp";
import SignUpDocScreen from "./components/SignUpDoctor";
import EmergencyDoctor from "./components/Emergency";
import BottomNavigator from "./components/BottomNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <SignUpScreen/> */}
      {/* <SignInScreen/> */}

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Bottom Navi"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Bottom Navi" component={BottomNavigator} />
          <Stack.Screen name="Get Started" component={GetStarted} />
          <Stack.Screen name="Home1" component={StartingScreen} />
          <Stack.Screen name="PatientSignUp" component={SignUpScreen} />
          <Stack.Screen name="DoctorSignUp" component={SignUpDocScreen} />
          <Stack.Screen name="EmergencyForm" component={EmergencyDoctor} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="InstantDoctor" component={DoctorListScreen} />
          <Stack.Screen name="BookAppoinment" component={BookAppointment} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <HomePage/> */}
      {/* // <ChatDrScreen/>
    // <About/>
    // <StartingScreen/>
    // <LoadingScreen/>
    // <Prescription/>
    // <ChatScreen/> screen 5
    // <ProfileScreen/> Screen4
    // <BookAppointment/> Screen3
    // <DoctorListScreen/> Screen 2 */}
    </>
  );
}
