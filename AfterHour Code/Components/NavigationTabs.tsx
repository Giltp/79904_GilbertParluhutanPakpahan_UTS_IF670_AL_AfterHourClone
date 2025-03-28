import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AppStyles, { COLORS } from "../StyleSheets";

const NavigationTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={AppStyles.navigationTabs}>
      {["For You", "Following"].map((tab) => (
        <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
          <Text style={selectedTab === tab ? AppStyles.activeTabText : AppStyles.inactiveTabText}>
            {tab}
          </Text>
          {selectedTab === tab && <View style={AppStyles.activeTab} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavigationTabs;
