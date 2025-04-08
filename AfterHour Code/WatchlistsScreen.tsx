import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons for consistency
import AppStyles from "./StyleSheets";

// Stock Logos
const stockLogos = {
  TSLA: require("../assets/Stocks Logo/Tesla Stocks Logo.png"),
  AAPL: require("../assets/Stocks Logo/Apple Stocks Logo.png"),
  MSFT: require("../assets/Stocks Logo/Microsoft Stocks Logo.png"),
  NVDA: require("../assets/Stocks Logo/Nvidia Stocks Logo.png"),
  GOOGL: require("../assets/Stocks Logo/Google Stocks Logo.png"),
  AMZN: require("../assets/Stocks Logo/Amazon Stocks Logo.png"),
  META: require("../assets/Stocks Logo/Meta Stocks Logo.png"),
  NFLX: require("../assets/Stocks Logo/Netflix Stocks Logo.png"),
};

const WatchlistsScreen = () => {
  const [watchlists, setWatchlists] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={AppStyles.container}>
      {/* ✅ Inline Custom Header */}
      <View style={AppStyles.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={AppStyles.headerLeft}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={AppStyles.headerTitle}>Watchlists</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddWatchlists", { setWatchlists })}
          style={AppStyles.headerRight}
        >
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* ✅ Watchlist Stocks List */}
      <FlatList
        data={watchlists}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={AppStyles.emptyText}>No stocks in your watchlist.</Text>}
        renderItem={({ item }) => (
          <View style={AppStyles.chatCard}>
            <Image source={stockLogos[item.ticker]} style={AppStyles.chatLogo} />
            <View style={AppStyles.chatDetails}>
              <Text style={AppStyles.chatTicker}>{item.ticker}</Text>
              <Text style={AppStyles.chatLastMessage}>{item.company}</Text>
            </View>
            <Text style={AppStyles.balanceText}>{item.total_balance}</Text>
          </View>
        )}
      />

      {/* ✅ Floating (+) Button */}
      <TouchableOpacity
        style={AppStyles.floatingButton}
        onPress={() => navigation.navigate("AddWatchlists", { setWatchlists })}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default WatchlistsScreen;
