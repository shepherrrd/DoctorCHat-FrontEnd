import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DoctorRegistrationScreen from "./components/DoctorRegistration";
import LoginScreen from "./screens/LoginScreen";
import AppNavigator from "./screens/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/UserProfile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ChatListScreen from "./screens/HomeScreen";
import SignUpScreen from "./components/UserRegistration";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="DoctorRegister"
        component={DoctorRegistrationScreen}
      />
      <Stack.Screen name="UserRegister" component={SignUpScreen} />
      <Stack.Screen name="ViewProfile" component={AppTabs} />
      <Stack.Screen name="Home" component={ChatListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* If you have a SignUp or ForgotPassword screen, add them here */}
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={ChatListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Chat"
        initialParams={{ id: 1 }}
        component={ChatScreen}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
