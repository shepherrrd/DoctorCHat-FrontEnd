import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

interface DoctorFormData {
  username: string;
  password: string;
  email: string;
  fullName: string;
  hospital: string;
  qualifications: string[];
  specialization: string;
  experience: number;
}

const DoctorRegistrationScreen: React.FC = () => {
  const [formData, setFormData] = useState<DoctorFormData>({
    username: "",
    password: "",
    email: "",
    fullName: "",
    hospital: "",
    qualifications: [],
    specialization: "",
    experience: null,
  });
  const handleSignUp = () => {
    // Perform sign up logic
    console.log(formData);
  };

  // Handlers for the form inputs and button press would go here
  // ...

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Doctor Chat</Text>
      <Text style={styles.title}>Fill in your application</Text>
      <Text style={styles.subtitle}>
        Please fill out the details below to complete your application.
      </Text>
      <Text style={styles.note}>Doctor Chat is HIPAA secure.</Text>

      <Text style={styles.sectionHeader}>Basic information</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setFormData({ ...formData, username: text })}
        value={formData.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        value={formData.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        value={formData.fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Hospital"
        onChangeText={(text) => setFormData({ ...formData, hospital: text })}
        value={formData.hospital}
      />
      {/* Repeat TextInput for qualifications as needed */}
      <TextInput
        style={styles.input}
        placeholder="Specialization"
        onChangeText={(text) =>
          setFormData({ ...formData, specialization: text })
        }
        value={formData.specialization}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience (years)"
        keyboardType="numeric"
        onChangeText={(text) =>
          setFormData({ ...formData, experience: parseInt(text, 10) })
        }
      />

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    alignSelf: "center",
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  note: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 24,
    color: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  dateText: {
    color: "#8f9aaf", // Placeholder text color for the date
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
  signInText: {
    color: "#0645AD",
    marginTop: 20,
  },
  agreementText: {
    fontSize: 12,
    color: "#666",
    marginTop: 20,
    textAlign: "center",
  },

  // ... Add any additional styles you need here
});

export default DoctorRegistrationScreen;
