import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import AppStyles from "./StyleSheets";
import stocksData from "./stocksdata.json";
import Icon from "react-native-vector-icons/FontAwesome"; // ✔️ Uses FontAwesome for + and ✔

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

type RootStackParamList = {
  AddWatchlists: { watchlists: any[]; setWatchlists: (watchlists: any[]) => void };
};

const AddWatchlistsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "AddWatchlists">>();
  const navigation = useNavigation();
  const { watchlists, setWatchlists } = route.params;

  const [availableStocks, setAvailableStocks] = useState([]);
  const [sessionAddedStocks, setSessionAddedStocks] = useState(new Set());

  useEffect(() => {
    // Filter out stocks that are already in the watchlist
    const watchlistIds = new Set(watchlists.map((stock) => stock.id));
    const filteredStocks = stocksData.filter((stock) => !watchlistIds.has(stock.id));
    setAvailableStocks(filteredStocks);
  }, [watchlists]);

  const addToWatchlist = (stock: any) => {
    setWatchlists((prev) => [...prev, stock]);
    setSessionAddedStocks((prev) => new Set(prev).add(stock.id));
  };

  const handleClose = () => {
    // Filter out stocks added during this session
    setAvailableStocks((prev) => prev.filter((stock) => !sessionAddedStocks.has(stock.id)));
    navigation.goBack();
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.screenTitle}>Add to Watchlist</Text>

      <FlatList
        data={availableStocks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={AppStyles.emptyText}>No more stocks to add.</Text>}
        renderItem={({ item }) => (
          <View style={AppStyles.joinChatCard}>
            <Image source={stockLogos[item.ticker]} style={AppStyles.chatLogo} />
            <View style={AppStyles.chatDetails}>
              <Text style={AppStyles.chatTicker}>{item.ticker}</Text>
              <Text style={AppStyles.chatCompany}>{item.company}</Text>
              <View style={{ flexDirection: "row", marginTop: 4 }}>
                <Text style={AppStyles.ownedByText}>Owned by:</Text>
                <Text style={AppStyles.totalBalanceText}>  {item.owned_by}  •  {item.total_balance}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={AppStyles.awiconButton}
              onPress={() => addToWatchlist(item)}
              disabled={sessionAddedStocks.has(item.id)}
            >
              <Icon
                name={sessionAddedStocks.has(item.id) ? "check" : "plus"}
                size={20}
                color="#a462ff"
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={AppStyles.closeButton}
        onPress={handleClose}
      >
        <Text style={AppStyles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWatchlistsScreen;
