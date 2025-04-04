import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AppStyles from "../StyleSheets";

const NotificationCard = ({ notification }) => {
  return (
    <TouchableOpacity style={AppStyles.notificationCard}>
      {/* Profile Image */}
      <Image source={{ uri: notification.avatar }} style={AppStyles.notificationAvatar} />

      {/* Notification Content */}
      <View style={AppStyles.notificationContent}>
        <Text style={AppStyles.notificationUsername}>
          {notification.username} <Text style={AppStyles.notificationAction}>posted</Text>
        </Text>
        <Text style={AppStyles.notificationMessage}>{notification.message}</Text>
        <Text style={AppStyles.notificationTimestamp}>{notification.timeAgo}</Text>
      </View>

      {/* Three-dot Menu */}
      <TouchableOpacity>
        <Text style={AppStyles.notificationMenu}>⋮</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NotificationCard;