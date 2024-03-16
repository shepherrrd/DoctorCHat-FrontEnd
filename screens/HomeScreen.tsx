import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

// Define the type for each chat item
type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  avatar: string;
};

// Mock chat data
const chats: ChatItem[] = [
  {
    id: "1",
    name: "Chat with AI",
    lastMessage: "I'm actually taking the CalTrain",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "2",
    name: "Doctor 1",
    lastMessage: "Can you believe they didn't check my ticket?",
    avatar: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    name: "Doctor 2",
    lastMessage: "Let's stay in touch, would love to revisit this convo",
    avatar: "https://via.placeholder.com/50",
  },
];

// Chat list item component
const ChatListItem = ({
  name,
  lastMessage,
  avatar,
  onPress,
}: ChatItem & { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image
        source={{ uri: avatar }} // Placeholder image
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{name}</Text>
        <Text style={styles.itemSubtitle}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Chat list screen component
const ChatListScreen = ({ navigation }) => {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <ChatListItem
      id={item.id}
      avatar={item.avatar}
      name={item.name}
      lastMessage={item.lastMessage}
      onPress={() => navigation.navigate("Chat", { id: item.id })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 16,
    color: "grey",
  },
  // ... add more styles if needed
});

export default ChatListScreen;
