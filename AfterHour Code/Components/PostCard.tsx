import React from "react";
import { View, Text, Image } from "react-native";
import AppStyles, { COLORS } from "../StyleSheets";
import Icon from "react-native-vector-icons/FontAwesome";

const PostCard = ({ post }) => {
  return (
    <View style={AppStyles.postCard}>
      {/* Header */}
      <View style={AppStyles.postHeader}>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={AppStyles.profilePic} />
        <View style={AppStyles.postUserInfo}>
          <Text style={AppStyles.username}>{post.user} <Text style={{ color: COLORS.GREEN }}>{post.balance}</Text></Text>
          <Text style={AppStyles.postTime}>{post.time}</Text>
        </View>
      </View>

      {/* Content */}
      <Text style={AppStyles.postContent}>{post.title}</Text>
      <Text style={AppStyles.postContent}>{post.content}</Text>

      {/* Post Interactions */}
      <View style={AppStyles.postInteractions}>
        <View style={AppStyles.interactionIcon}><Icon name="heart" size={16} color={COLORS.WHITE} /><Text> {post.likes}</Text></View>
        <View style={AppStyles.interactionIcon}><Icon name="comment" size={16} color={COLORS.WHITE} /><Text> {post.comments}</Text></View>
        <View style={AppStyles.interactionIcon}><Icon name="retweet" size={16} color={COLORS.WHITE} /><Text> {post.shares}</Text></View>
        <View style={AppStyles.interactionIcon}><Icon name="bookmark" size={16} color={COLORS.WHITE} /><Text> {post.bookmarks}</Text></View>
      </View>
    </View>
  );
};

export default PostCard;
