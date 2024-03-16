import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Define the type for each message
type Message = {
  id: string;
  chatId: string;
  sender: string;
  senderName?: string;
  text: string;
  dateTime: Date;
  profilepicture?: string;
};

// Mock messages data
const messages: Message[] = [
  {
    id: "1",
    chatId: "1",
    sender: "AI",
    senderName: "AI Assistant",
    text: "Hello! How can I help you today?",
    dateTime: new Date("2024-01-01T12:00:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
  {
    id: "2",
    chatId: "1",
    sender: "user123",
    text: "Hi! I'm having an issue with my account.",
    dateTime: new Date("2024-01-01T12:01:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    chatId: "1",
    sender: "AI",
    senderName: "AI Assistant",
    text: "I'm sorry to hear that. Could you provide me with more details?",
    dateTime: new Date("2024-01-01T12:02:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
  {
    id: "4",
    chatId: "1",
    sender: "user123",
    text: "I've been charged incorrectly for my last transaction.",
    dateTime: new Date("2024-01-01T12:03:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
  {
    id: "5",
    chatId: "1",
    sender: "AI",
    senderName: "AI Assistant",
    text: "I see. Let me check that for you. Can you provide the transaction ID?",
    dateTime: new Date("2024-01-01T12:04:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
  {
    id: "6",
    chatId: "1",
    sender: "user123",
    text: "Sure, it's #123456789.",
    dateTime: new Date("2024-01-01T12:05:00Z"),
    profilepicture: "https://via.placeholder.com/50",
  },
];

// Sort messages by dateTime
messages.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

// Message item component
const MessageItem = ({
  senderName,
  text,
  isSender,
}: {
  senderName?: string;
  text: string;
  isSender: boolean;
}) => {
  const messageStyle = isSender ? styles.senderMessage : styles.receiverMessage;
  const containerStyle = isSender
    ? styles.senderContainer
    : styles.receiverContainer;
  const messageText = isSender
    ? styles.senderMessageText
    : styles.receiverMessageText;
  return (
    <View style={[styles.messageContainer, containerStyle]}>
      {!isSender && (
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.profileImage}
        />
      )}
      <View style={[styles.bubble, messageStyle]}>
        {!isSender && <Text style={styles.senderName}>{senderName}</Text>}
        <Text style={messageText}>{text}</Text>
      </View>
    </View>
  );
};

// Messaging screen component
const MessagingScreen = ({ route }) => {
  const chatId = route.params.id;
  const currentUserId = "user123"; // Replace with actual current user ID
  const [chatMessages, setChatMessages] = useState(
    messages.filter((message) => message.chatId === route.params.id)
  );
  const [inputText, setInputText] = useState("");
  // Filter messages for this chat
  const handleSendMessage = () => {
    // Create a new message object
    const newMessage: Message = {
      id: Math.random().toString(36).substring(7),
      chatId: route.params.id,
      sender: "user123",
      text: inputText,
      dateTime: new Date(),
      profilepicture: "https://via.placeholder.com/50",
    };

    setChatMessages((prevMessages) =>
      [newMessage, ...prevMessages].sort(
        (a, b) => a.dateTime.getTime() - b.dateTime.getTime()
      )
    );

    setInputText("");
  };
  const renderItem = ({ item }: { item: Message }) => {
    const isSender = item.sender === currentUserId;
    return (
      <MessageItem
        senderName={item.senderName}
        text={item.text}
        isSender={isSender}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... other styles
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  messageContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    maxWidth: "70%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  senderMessageText: {
    color: "white",
  },
  receiverMessageText: {
    color: "white",
  },
  senderMessage: {
    backgroundColor: "blue",
    alignSelf: "flex-end",
  },
  receiverMessage: {
    backgroundColor: "grey",
    alignSelf: "flex-start",
  },
  senderContainer: {
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  receiverContainer: {
    justifyContent: "flex-start",
    marginRight: "auto",
  },
  bubble: {
    borderRadius: 20,
    padding: 10,
    maxWidth: "70%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 6,
  },
  senderName: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 8,
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 8,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "white",
  },
  // ... other styles
});

export default MessagingScreen;
