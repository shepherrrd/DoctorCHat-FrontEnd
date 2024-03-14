import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import DoctorRegistration from "../components/DoctorRegistration";
import SignUpScreen from "../components/UserRegistration";
import ProfileScreen from "./UserProfile";

export type RootStackParamList = {
  Login: undefined;
  UserRegister: undefined;
  DoctorRegister: undefined;
  ViewProfile: undefined;

  // Add parameters here if UserRegister takes any
};
const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="DoctorRegister"
          options={{ title: "Doctor Registration" }}
          component={DoctorRegistration}
        />
        <Stack.Screen
          name="UserRegister"
          options={{ title: "User Registration" }}
          component={SignUpScreen}
        />

        <Stack.Screen
          name="ViewProfile"
          options={{ title: "Profile" }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
