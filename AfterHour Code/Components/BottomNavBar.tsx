import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ Import navigation hook
import Icon from "react-native-vector-icons/FontAwesome";
import AppStyles, { COLORS } from "../StyleSheets";

const BottomNavBar = () => {
  const navigation = useNavigation(); // ✅ Access navigation

  return (
    <View style={AppStyles.bottomNavigation}>
      {[
        { name: "home", screen: "Home" },
        { name: "search", screen: "Search" },
        { name: "plus", screen: null }, // ❌ No navigation for "plus"
        { name: "bell", screen: null }, // ❌ No navigation for notifications
        { name: "comment", screen: null }, // ❌ No navigation for messages
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={item.name === "plus" ? AppStyles.centerNavItem : AppStyles.navItem}
          onPress={() => {
            if (item.screen) {
              navigation.navigate(item.screen as never); // ✅ TypeScript-safe navigation
            }
          }}
        >
          <Icon name={item.name} size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavBar;
