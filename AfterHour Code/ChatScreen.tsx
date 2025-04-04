import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, requireNativeComponent } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import stocksData from "./stocksdata.json";
import AppStyles from "./StyleSheets";
import JoinChatScreen from "./JoinChatScreen";
import TopBar from "./Components/TopBar"; // ✅ Import Top Bar

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

const ChatListScreen = ({ navigation }) => {
  const [joinedChats, setJoinedChats] = useState([]);

  return (
    <View style={AppStyles.container}>
      {/* ✅ Top Bar */}
      <TopBar title="Chats" />

      {/* ✅ Chat List */}
      <FlatList
        data={joinedChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={AppStyles.chatCard}>
            <Image source={stockLogos[item.ticker]} style={AppStyles.chatLogo} />
            <View style={AppStyles.chatDetails}>
              <Text style={AppStyles.chatTicker}>{item.ticker}</Text>
              <Text style={AppStyles.chatLastMessage}>{item.last_message}</Text>
            </View>
            <Text style={AppStyles.chatTimestamp}>{item.last_message_time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* ✅ Floating (+) Button to Open Join Chat */}
      <TouchableOpacity
        style={AppStyles.floatingButton}
        onPress={() => navigation.navigate("JoinChat", { id: "some-id", setJoinedChats })}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatListScreen;