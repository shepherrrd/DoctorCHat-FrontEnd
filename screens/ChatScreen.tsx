import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const ChatScreen = ({ route }) => {
  const { messageId } = route.params.id;
  const currentUserId = "123"; // This should come from your auth state
  const messages = [
    {
      id: "1",
      text: "Hello!",
      senderId: "123",
      receiverId: "456",
      createdAt: new Date(),
    },
    {
      id: "2",
      text: "Hello!",
      senderId: "123",
      receiverId: "456",
      createdAt: new Date(),
    },
    // ... other messages
  ];

  // Filter and sort messages by date
  const chatMessages = messages
    .filter((message) => message.id === messageId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  // Render each message
  const renderMessageItem = ({ item }) => {
    const isOutgoing = item.senderId === currentUserId;
    return (
      <View
        style={[
          styles.messageItem,
          isOutgoing ? styles.outgoingMessage : styles.incomingMessage,
        ]}
      >
        <Text
          style={
            isOutgoing ? styles.outgoingMessageText : styles.incomingMessageText
          }
        >
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={chatMessages}
      keyExtractor={(item) => item.id}
      renderItem={renderMessageItem}
      // ...
    />
  );
};
// Message item styles
const styles = StyleSheet.create({
  // ... (other styles)
  messageItem: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "flex-end",
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
    maxWidth: "80%",
  },
  incomingMessage: {
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: "auto",
  },
  outgoingMessage: {
    backgroundColor: "blue",
    marginRight: 10,
    marginLeft: "auto",
  },
  incomingMessageText: {
    color: "black",
  },
  outgoingMessageText: {
    color: "white",
  },
});
export default ChatScreen;
