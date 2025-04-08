import React, { useState } from "react";
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
  NFLX: require("../assets/Stocks Logo/Netflix Stocks Logo.png")
};

type RootStackParamList = {
  AddWatchlists: { setWatchlists: (watchlists: any) => void };
};

const AddWatchlistsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "AddWatchlists">>();
  const navigation = useNavigation();
  const { setWatchlists } = route.params;

  const [availableStocks, setAvailableStocks] = useState(stocksData);
  const [addedStocks, setAddedStocks] = useState<string[]>([]); // to track added

  const addToWatchlist = (stock: any) => {
    setWatchlists((prev: any[]) => [...prev, stock]);
    setAddedStocks((prev) => [...prev, stock.id]);
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.screenTitle}>Add to Watchlist</Text>

      <FlatList
        data={availableStocks}
        keyExtractor={(item) => item.id}
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
              disabled={addedStocks.includes(item.id)}
            >
              <Icon
                name={addedStocks.includes(item.id) ? "check" : "plus"}
                size={20}
                color="#a462ff"
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={AppStyles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={AppStyles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWatchlistsScreen;
