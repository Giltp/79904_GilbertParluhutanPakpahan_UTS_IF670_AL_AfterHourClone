import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SectionList, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './Components/TopBar';
import AppStyles, { COLORS } from './StyleSheets';
import postData from './data.json';
import stocksDataJson from './stocksdata.json';

const topics = [
  { id: '1', name: 'Featured', icon: '⭐' },
  { id: '2', name: 'Contest', icon: '🏆' },
  { id: '3', name: 'YOLO', icon: '💰' },
  { id: '4', name: 'Poll', icon: '📦' },
  { id: '5', name: 'Chart', icon: '📈' },
  { id: '6', name: 'DD', icon: '🧠' },
  { id: '7', name: 'Gain', icon: '🚀' },
  { id: '8', name: 'Loss', icon: '📉' },
  { id: '9', name: 'Funny', icon: '😂' },
  { id: '10', name: 'Crypto', icon: '🤖' },
  { id: '11', name: 'Discuss', icon: '💬' },
  { id: '12', name: 'News', icon: '📰' },
];

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

// Convert formatted strings (like "$23.2K") to numbers
const convertToNumber = (value) =>
  parseFloat(value.replace(/[$KMB]/g, '')) *
  (value.includes('M') ? 1_000_000 : value.includes('K') ? 1_000 : 1);

// Process traders data for sorting
const processTraders = (key) =>
  [...postData]
    .map((item) => ({
      id: item.id,
      name: item.user,
      value: item[key],
      numericValue: convertToNumber(item[key]),
    }))
    .sort((a, b) => b.numericValue - a.numericValue);

const topTraders = processTraders('balance');
const mostTipsTraders = processTraders('tips');

// Process stock data with logos and convert string numbers
const stocksData = stocksDataJson.map(stock => ({
  ...stock,
  logo: stockLogos[stock.ticker],
  owned_by: parseFloat(stock.owned_by.replace('K', '')) * 1_000, // Convert "25.6K" → 25600
  watchlist_count: parseFloat(stock.watchlist_count.replace('K', '')) * 1_000, // Convert "12.8K" → 12800
}));

// Sort stocks for different sections
const trendingStocks = [...stocksData];
const mostOwnedStocks = [...stocksData].sort((a, b) => b.owned_by - a.owned_by);
const mostWatchedStocks = [...stocksData].sort((a, b) => b.watchlist_count - a.watchlist_count);

const SearchScreen = () => {
  // Component for search bar
  const SearchBar = () => (
    <View style={AppStyles.searchBar}>
      <Ionicons name="search" size={20} color={COLORS.GRAY} style={{ marginRight: 10 }} />
      <TextInput placeholder="Search" placeholderTextColor={COLORS.GRAY} style={AppStyles.searchInput} />
    </View>
  );

  // Component for topics
  const TopicsSection = () => (
    <View style={AppStyles.topicsContainer}>
      {topics.map((item) => (
        <TouchableOpacity key={item.id} style={AppStyles.topicButton}>
          <Text style={AppStyles.topicText}>{item.icon} {item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Component for horizontal lists
  const HorizontalTradersList = ({ data, valueKey }) => (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={AppStyles.traderCard}>
          <Text style={AppStyles.traderName}>{item.name}</Text>
          <Text style={valueKey === 'balance' ? AppStyles.traderBalance : AppStyles.traderTips}>
            {valueKey === 'tips' ? '🪙 ' : ''}{item.value}
          </Text>
          <TouchableOpacity style={AppStyles.followButton}>
            <Text style={AppStyles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );

  // Component for stock lists
  const HorizontalStockList = ({ data, type }) => (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={AppStyles.stockCard}>
          <Text style={AppStyles.stockName}>{item.ticker}</Text>
          {type === 'owned' ? (
            <Text style={AppStyles.stockSubtext}>{item.owned_by.toLocaleString()} owners</Text>
          ) : (
            <Text style={AppStyles.stockSubtext}>{item.watchlist_count.toLocaleString()} watching</Text>
          )}
          <Image source={item.logo} style={AppStyles.stockLogo} />
          {type === 'watched' && (
            <TouchableOpacity style={AppStyles.addButton}>
              <Text style={AppStyles.addButtonText}>➕ Add</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );

  // Define sections for SectionList
  const sections = [
    {
      type: 'search',
      data: [{}], // Dummy data for custom component
      renderItem: () => <SearchBar />
    },
    {
      type: 'topics',
      data: [{}], // Dummy data for custom component
      renderItem: () => <TopicsSection />
    },
    {
      type: 'topTraders',
      title: 'Top Traders',
      data: [{}], // Dummy data for custom component
      renderItem: () => <HorizontalTradersList data={topTraders} valueKey="balance" />
    },
    {
      type: 'mostTips',
      title: 'Most Tips',
      data: [{}], // Dummy data for custom component
      renderItem: () => <HorizontalTradersList data={mostTipsTraders} valueKey="tips" />
    },
    {
      type: 'trendingStocks',
      title: 'Trending Stocks',
      data: trendingStocks,
      renderItem: ({ item }) => (
        <View style={AppStyles.stockItem}>
          <Image source={item.logo} style={AppStyles.stockLogo} />
          <View style={{ flex: 1 }}>
            <Text style={AppStyles.stockText}>{item.ticker} - {item.company}</Text>
            <Text style={AppStyles.stockDetails}>{item.owned_by.toLocaleString()} people own this | {item.total_balance} total</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.GRAY} />
        </View>
      )
    },
    {
      type: 'mostOwned',
      title: 'Most Owned',
      data: [{}], // Dummy data for custom component
      renderItem: () => <HorizontalStockList data={mostOwnedStocks} type="owned" />
    },
    {
      type: 'mostWatched',
      title: 'Most Watched',
      data: [{}], // Dummy data for custom component
      renderItem: () => <HorizontalStockList data={mostWatchedStocks} type="watched" />
    }
  ];

  return (
    <View style={AppStyles.container}>
      <TopBar />
      
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${index}`}
        renderSectionHeader={({ section }) => 
          section.title ? <Text style={AppStyles.sectionTitle}>{section.title}</Text> : null
        }
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

export default SearchScreen;