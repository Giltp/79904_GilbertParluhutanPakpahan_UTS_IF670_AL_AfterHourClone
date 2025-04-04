import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import NotificationCard from "./Components/NotificationCard";
import notifications from "./notification.json";
import TopBar from "./Components/TopBar";
import AppStyles from "./StyleSheets";

const FILTERS = ["All", "Posts", "Comments", "Mentions"];

// Function to convert "5h" → 5, "1d" → 24
const parseTimeAgo = (timeAgo) => {
  const num = parseInt(timeAgo); // Extract number (e.g., 5 from "5h", 1 from "1d")
  if (timeAgo.includes("h")) return num; // Convert "5h" → 5
  if (timeAgo.includes("d")) return num * 24; // Convert "1d" → 24
  return Infinity; // If no valid format, push to bottom
};

const NotificationsScreen = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotifications = notifications
    .filter((item) =>
      activeFilter === "All" ? true : item.type === activeFilter.toLowerCase()
    )
    .sort((a, b) => parseTimeAgo(a.timeAgo) - parseTimeAgo(b.timeAgo)); // Sort by recency

  return (
    <View style={AppStyles.container}>
      {/* Top Bar */}
      <TopBar title="Notifications" showIcons={true} />

      {/* Filter Navigation */}
      <View style={AppStyles.filterNav}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              AppStyles.filterButton,
              activeFilter === filter && AppStyles.activeFilter,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                AppStyles.filterText,
                activeFilter === filter && AppStyles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notification List */}
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationCard notification={item} />}
      />
    </View>
  );
};

export default NotificationsScreen;