import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import AppStyles, { COLORS } from "../StyleSheets";
import Icon from "react-native-vector-icons/FontAwesome";

interface TopBarProps {
  title?: string; // ✅ Make title optional
  showIcons?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ title, showIcons = true }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update time every second
    const timerInterval = setInterval(updateTime, 1000);
    updateTime(); // Run immediately

    return () => clearInterval(timerInterval); // Cleanup
  }, []);

  return (
    <View style={AppStyles.topBar}>
      {/* Left Icon (Only Show if showIcons is true) */}
      {showIcons && <Icon name="diamond" size={24} color={COLORS.PRIMARY_PURPLE} />}

      {/* Title or Pre-market Timer */}
      {title ? (
        <Text style={AppStyles.topBarTitle}>{String(title)}</Text>
      ) : (
        <View style={AppStyles.marketTimerContainer}>
          <Text style={AppStyles.marketTimer}>Pre-market</Text>
          <Text style={AppStyles.marketTimerText}>{time}</Text> {/* ✅ Dynamic time */}
        </View>
      )}

      {/* Right Icon (Only Show if showIcons is true) */}
      {showIcons && <Icon name="eye" size={24} color={COLORS.WHITE} />}
    </View>
  );
};

export default TopBar;
