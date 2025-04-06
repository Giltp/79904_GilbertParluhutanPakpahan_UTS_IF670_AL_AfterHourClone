import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppStyles, { COLORS } from "../StyleSheets";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, DrawerActions } from "@react-navigation/native";

interface TopBarProps {
  title?: string;
  showIcons?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ title, showIcons = true }) => {
  const [time, setTime] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const timerInterval = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timerInterval);
  }, []);

  const handleDrawerToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={AppStyles.topBar}>
      {/* Left Icon - Open Drawer */}
      {showIcons ? (
        <TouchableOpacity onPress={handleDrawerToggle}>
          <Icon name="diamond" size={24} color={COLORS.PRIMARY_PURPLE} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}

      {/* Title or Pre-market Timer */}
      {title ? (
        <Text style={AppStyles.topBarTitle}>{String(title)}</Text>
      ) : (
        <View style={AppStyles.marketTimerContainer}>
          <Text style={AppStyles.marketTimer}>Pre-market</Text>
          <Text style={AppStyles.marketTimerText}>{time}</Text>
        </View>
      )}

      {/* Right Icon */}
      {showIcons && <Icon name="eye" size={24} color={COLORS.WHITE} />}
    </View>
  );
};

export default TopBar;
