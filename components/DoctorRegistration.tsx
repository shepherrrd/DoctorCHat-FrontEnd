import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const DoctorRegistration: React.FC = () => {
  const [formData, setFormData] = useState<DoctorFormData>({
    username: "",
    password: "",
    email: "",
    name: "",
    hospital: "",
    qualification: "",
    specialization: "",
  });

  const handleInputChange = (field: keyof DoctorFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Submit form logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Sign Up</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Hospital"
        onChangeText={(text: string) => handleInputChange("hospital", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Qualification"
        onChangeText={(text: string) =>
          handleInputChange("qualification", text)
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Specialization"
        onChangeText={(text: string) =>
          handleInputChange("specialization", text)
        }
      />
      <Button title="Sign Up" onPress={handleSubmit} />
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

export default DoctorRegistration;
