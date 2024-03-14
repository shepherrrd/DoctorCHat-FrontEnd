import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";

interface UserProfile {
  accountNumber: string;
  email: string;
  password: string;
  phoneNumber: string;
  registrationDate: string;
  firstName: string;
  surname: string;
  country: string;
  city: string;
  profileImage?: string;
}

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    accountNumber: "88888",
    email: "shefkid2@gmail.com",
    password: "********",
    phoneNumber: "913...75",
    registrationDate: "24/06/2021",
    firstName: "Shepherd",
    surname: "Umanah",
    country: "Nigeria",
    city: "Port Harcourt",
    profileImage: "",
  });

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return false;
    }
    return true;
  };

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return false;
    }
    return true;
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Access the uri from the first item in the assets array
      const uri = result.assets[0].uri;
      console.log(uri);
      // Set the uri to state or handle the image URI as needed
      setProfile({ ...profile, profileImage: uri });
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Access the uri from the first item in the assets array
      const uri = result.assets[0].uri;
      console.log(uri);
      // Set the uri to state or handle the image URI as needed
      setProfile({ ...profile, profileImage: uri });
    }
  };

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSaveChanges = () => {
    setIsEditMode(false);
    // Here, implement logic to save the changes to the profile
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personal profile</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: profile.profileImage
              ? profile.profileImage
              : "https://via.placeholder.com/150", // A placeholder image
          }}
          style={styles.profileImage}
        ></Image>
        {isEditMode && (
          <>
            <Button title="Choose Photo" onPress={handlePickImage} />
            <Button title="Take Photo" onPress={takePhoto} />
          </>
        )}
      </View>
      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.label}>Account number</Text>
          <Text style={styles.value}>{profile.accountNumber}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>E-mail</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={profile.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          ) : (
            <Text style={styles.value}>{profile.email}</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Password</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={profile.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry
            />
          ) : (
            <Text style={styles.value}>{profile.password}</Text>
          )}
        </View>

        {/* Other sections for phone number, registration date, etc. */}

        {/* Personal Information Section */}
        <View style={[styles.section, styles.sectionLast]}>
          <Text style={styles.label}>First name</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={profile.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
            />
          ) : (
            <Text style={styles.value}>{profile.firstName}</Text>
          )}
        </View>

        {/* Other personal info sections */}

        {isEditMode && (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveChanges}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        )}
      </View>

      {!isEditMode && (
        <TouchableOpacity
          onPress={() => setIsEditMode(true)}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    marginVertical: 8,
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  section: {
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    padding: 16,
  },
  sectionLast: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 16,
    color: "#9e9e9e",
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
  input: {
    fontSize: 16,
    marginTop: 4,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    paddingVertical: 4,
  },
  editButton: {
    padding: 16,
    alignItems: "center",
  },
  editButtonText: {
    color: "#1976d2",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 4,
    margin: 16,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it circular
  },
  // ... more styles for other components
});

export default ProfileScreen;
