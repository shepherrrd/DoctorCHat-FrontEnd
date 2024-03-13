import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { UserFormData } from "../types/RegistrationTypes";
const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    password: "",
    email: "",
    name: "",
    dateOfBirth: null,
  });

  const handleInputChange = (field: keyof UserFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Submit form logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text: string) => handleInputChange("username", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text: string) => handleInputChange("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text: string) => handleInputChange("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text: string) => handleInputChange("name", text)}
      />
      {/* Date picker for Date of Birth */}
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
});

export default UserRegistration;
