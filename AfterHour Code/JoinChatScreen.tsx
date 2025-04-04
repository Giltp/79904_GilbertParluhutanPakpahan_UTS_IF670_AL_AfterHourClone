import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import AppStyles from "./StyleSheets";
import stocksData from "./stocksdata.json";

// Stock Logos
const stockLogos = {
    TSLA: require("../assets/Stocks Logo/Tesla Stocks Logo.png"),
    AAPL: require("../assets/Stocks Logo/Apple Stocks Logo.png"),
    MSFT: require("../assets/Stocks Logo/Microsoft Stocks Logo.png"),
    NVDA: require("../assets/Stocks Logo/Nvidia Stocks Logo.png"),
    GOOGL: require("../assets/Stocks Logo/Google Stocks Logo.png"),
    AMZN: require("../assets/Stocks Logo/Amazon Stocks Logo.png"),
    META: require("../assets/Stocks Logo/Meta Stocks Logo.png"),
    NFLX: require("../assets/Stocks Logo/Netflix Stocks Logo.png")
  };

const JoinChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { setJoinedChats } = route.params;

  // ✅ State for available chats
  const [availableChats, setAvailableChats] = useState(stocksData);

  // ✅ Function to join a chat
  const joinChat = (chat) => {
    setJoinedChats((prevChats) => [...prevChats, chat]); // Add to ChatScreen.tsx
    setAvailableChats((prevChats) => prevChats.filter((item) => item.id !== chat.id)); // Remove from JoinChatScreen
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.screenTitle}>Join Chat</Text>

      <FlatList
        data={availableChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={AppStyles.joinChatCard}>
            <Image source={stockLogos[item.ticker]} style={AppStyles.chatLogo} />
            <View style={AppStyles.chatDetails}>
              <Text style={AppStyles.chatTicker}>{item.ticker}</Text>
              <Text style={AppStyles.chatCompany}>{item.company}</Text>
            </View>
            <TouchableOpacity style={AppStyles.joinButton} onPress={() => joinChat(item)}>
              <Text style={AppStyles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Close Button */}
      <TouchableOpacity style={AppStyles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={AppStyles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinChatScreen;
