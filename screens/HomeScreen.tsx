// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ChatScreen from "./ChatScreen";

const chats = [
  {
    id: "1",
    name: "Olivia Smith",
    message: "I'm actually taking the CalTrain",
  },
  // ... other chat entries
];

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleSelectChat = (name) => {
    // Navigate to the Chat screen with the chat name
    return <ChatScreen route={{ id: name }} />;
  };

  return (
    <View style={styles.container}>
      {/* Chat list */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectChat(item.id)}>
            <Text>{item.name}</Text>
            <Text>{item.message}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Tab Bar */}
      {/* <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab("Home")}>
          <Text
            style={[styles.tabItem, activeTab === "Home" && styles.activeTab]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text
            style={[
              styles.tabItem,
              activeTab === "Profile" && styles.activeTab,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  tabItem: {
    fontSize: 16,
  },
  activeTab: {
    color: "blue",
  },
});

export default HomeScreen;
