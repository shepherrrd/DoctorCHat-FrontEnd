import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/AppNavigator";
import { useNavigation } from "@react-navigation/native";
type UserRegistrationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserRegister"
>;
interface SignUpFormData {
  fullName: string;
  dateOfBirth: Date | null;
  weight?: number;
  height?: number;
  allergies?: string;
  otherMedicalData?: string;
}

const SignUpScreen: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    dateOfBirth: null,
    weight: undefined,
    height: undefined,
    allergies: undefined,
    otherMedicalData: undefined,
  });
  const navigation = useNavigation<UserRegistrationNavigationProp>();

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const handleInputChange = (field: keyof SignUpFormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    // Perform sign up logic
    console.log(formData);
  };
  const navigateToLogin = () => {
    // Navigate to the login screen
    navigation.navigate("Login");
  };
  const navigateToDoctorRegister = () => {
    // Navigate to the doctor registration screen
    navigation.navigate("DoctorRegister");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Docus</Text>
      <Text style={styles.title}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => handleInputChange("fullName", text)}
        value={formData.fullName}
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          {formData.dateOfBirth
            ? formData.dateOfBirth.toLocaleDateString()
            : "Date of Birth"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={formData.dateOfBirth || new Date()}
          mode="date"
          display="default"
          onChange={(event: any, date: any) => {
            setShowDatePicker(false);
            handleInputChange("dateOfBirth", date);
          }}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Weight (optional)"
        onChangeText={(text: string) => handleInputChange("weight", text)}
        value={formData.weight ? String(formData.weight) : ""}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Height (optional)"
        onChangeText={(text: string) => handleInputChange("height", text)}
        value={formData.height ? String(formData.height) : ""}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Allergies (optional)"
        onChangeText={(text: string) => handleInputChange("allergies", text)}
        value={formData.allergies}
      />
      <TextInput
        style={styles.input}
        placeholder="Other Medical Data (optional)"
        onChangeText={(text: string) =>
          handleInputChange("otherMedicalData", text)
        }
        value={formData.otherMedicalData}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.signInText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToDoctorRegister}
        style={styles.registerLink}
      >
        <Text style={styles.registerText}>
          Want To Be A Doctor? Register Here
        </Text>
      </TouchableOpacity>

      <Text style={styles.agreementText}>
        By signing up you agree to the Terms of Use, Privacy Policy and Cookie
        Policy.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  registerLink: {
    marginTop: 16,
  },
  registerText: {
    color: "#0645AD",
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
});

export default SignUpScreen;
