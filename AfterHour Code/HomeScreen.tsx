import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AppStyles from "./StyleSheets";
import TopBar from "./Components/TopBar";
import NavigationTabs from "./Components/NavigationTabs";
import PostCard from "./Components/PostCard";
import BottomNavBar from "./Components/BottomNavBar";
import postData from "./data.json"; // ✅ Load dummy data

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("For You");

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}> {/* ✅ Fix layout */}
      {/* Top Bar (Fixed Position) */}
      <TopBar />

      {/* Navigation Tabs (Fixed Position) */}
      <NavigationTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Content (Scroll Only This) */}
      <ScrollView style={{ flex: 1 }}>
        {postData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
