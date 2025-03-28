import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AppStyles, { COLORS } from "../StyleSheets";

const BottomNavBar = () => {
  return (
    <View style={AppStyles.bottomNavigation}>
      {["home", "search", "plus", "bell", "comment"].map((icon, index) => (
        <TouchableOpacity key={index} style={icon === "plus" ? AppStyles.centerNavItem : AppStyles.navItem}>
          <Icon name={icon} size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavBar;
