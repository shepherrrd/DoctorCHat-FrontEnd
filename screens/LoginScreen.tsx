import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./AppNavigator";
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
interface LoginFormData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = () => {
    // Perform login logic
    console.log("Login data:", formData);
    navigation.navigate("ViewProfile");
  };

  const navigateToRegister = () => {
    navigation.navigate("UserRegister");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctor Chat</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToRegister}
        style={styles.registerLink}
      >
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  registerLink: {
    marginTop: 16,
  },
  registerText: {
    color: "#0645AD",
  },
  // ... any additional styles you might need
});

export default LoginScreen;
