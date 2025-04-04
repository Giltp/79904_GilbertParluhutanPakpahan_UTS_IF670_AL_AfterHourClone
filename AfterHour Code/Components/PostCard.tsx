import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppStyles, { COLORS } from "../StyleSheets"; // Import styles and colors

const PostCard = ({ post }) => {
  return (
    <View style={AppStyles.postCard}>
      {/* Profile Header */}
      <View style={AppStyles.postHeader}>
        <Image source={{ uri: post.profilePic }} style={AppStyles.profilePic} />
        <View style={AppStyles.postUserInfo}>
          {/* Fixed username display with verification icon */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={AppStyles.username}>{post.user}</Text>
            {post.verified && (
              <FontAwesome 
                name="check-circle" 
                size={14} 
                color={COLORS.GREEN} 
                style={{ marginLeft: 4 }} 
              />
            )}
          </View>
          <Text style={AppStyles.userBalance}>{post.balance}</Text>
        </View>
        <Text style={AppStyles.postTime}>{post.time}</Text>
      </View>

      <View>
        {/* Post Title */}
        <Text style={AppStyles.postTitle}>{String(post.title)}</Text>

        {/* Post Content */}
        <Text style={AppStyles.postContent}>{String(post.content)}</Text>
      </View>

      {/* Post Actions */}
      <View style={AppStyles.postInteractions}>
        <TouchableOpacity style={AppStyles.interactionIcon}>
          <FontAwesome name="heart" size={20} color={COLORS.RED} />
          <Text style={AppStyles.interactionText}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyles.interactionIcon}>
          <FontAwesome name="comment" size={20} color={COLORS.BLUE} />
          <Text style={AppStyles.interactionText}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyles.interactionIcon}>
          <FontAwesome name="retweet" size={20} color={COLORS.GREEN} />
          <Text style={AppStyles.interactionText}>{post.shares}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyles.interactionIcon}>
          <FontAwesome name="bookmark" size={20} color={COLORS.BLUE} />
          <Text style={AppStyles.interactionText}>{post.bookmarks}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;