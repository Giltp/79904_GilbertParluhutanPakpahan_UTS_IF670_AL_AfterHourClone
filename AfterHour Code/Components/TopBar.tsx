import React from "react";
import { View, Text, Image } from "react-native";
import AppStyles, { COLORS } from "../StyleSheets";
import Icon from "react-native-vector-icons/FontAwesome";

const TopBar = () => {
  return (
    <View style={AppStyles.topBar}>
      {/* Left Icon */}
      <Icon name="diamond" size={24} color={COLORS.PRIMARY_PURPLE} />

      {/* Pre-market Timer */}
      <View style={AppStyles.marketTimerContainer}>
        <Text style={AppStyles.marketTimer}>Pre-market</Text>
        <Text style={AppStyles.marketTimerText}>05:18:12</Text>
      </View>

      {/* Right Icon */}
      <Icon name="eye" size={24} color={COLORS.WHITE} />
    </View>
  );
};

export default TopBar;
