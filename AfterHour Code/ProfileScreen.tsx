import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AppStyles from './StyleSheets';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={AppStyles.profilecontainer}>
      {/* Top Header */}
      <View style={AppStyles.profileheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={AppStyles.headerRight}>
          <TouchableOpacity style={AppStyles.iconButton}>
            <Icon name="share-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={AppStyles.iconButton}>
            <Icon name="ellipsis-horizontal" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Avatar & Username */}
      <View style={AppStyles.profileContainer}>
        <View style={AppStyles.avatarContainer}>
          <Image
            source={require('../assets/ProfilePicture.jpeg')}
            style={AppStyles.profileavatar}
          />
          <View style={AppStyles.badgeIcon}>
            <MaterialCommunityIcons name="diamond" size={20} color="#00BFFF" />
          </View>
        </View>
        <Text style={AppStyles.profileusername}>ate_a_pie</Text>
      </View>

      {/* Stats */}
      <View style={AppStyles.statsContainer}>
        <StatBlock label="Followers" value="0" />
        <StatBlock label="Following" value="3" />
        <StatBlock label="Tips" value="0" icon="bitcoin" />
        <StatBlock label="Badge" value="1" />
      </View>

      {/* Bio */}
      <TouchableOpacity style={AppStyles.bio}>
        <Text style={AppStyles.bioText}>Add bio</Text>
      </TouchableOpacity>

      {/* Buttons */}
      <View style={AppStyles.actions}>
        <TouchableOpacity style={AppStyles.actionButton}>
          <Icon name="pencil" size={16} color="#fff" />
          <Text style={AppStyles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={AppStyles.actionButton} onPress={() => navigation.navigate('Main', { screen: 'Settings' })}>
          <Icon name="settings-outline" size={16} color="#fff" />
          <Text style={AppStyles.actionText}>Settings</Text>
        </TouchableOpacity>

      </View>

      {/* Posts Section */}
      <View style={AppStyles.postsHeader}>
        <Text style={AppStyles.postsTitle}>Posts</Text>
        <TouchableOpacity>
          <Text style={AppStyles.dropdown}>All ▾</Text>
        </TouchableOpacity>
      </View>

      {/* No Posts */}
      <View style={AppStyles.noPosts}>
        <MaterialCommunityIcons name="emoticon-dead-outline" size={60} color="#FFD700" />
        <Text style={AppStyles.noPostsText}>No posts</Text>
        <Text style={AppStyles.noPostsSub}>Get out there and share some DD!</Text>
        <TouchableOpacity style={AppStyles.createButton}>
          <Text style={AppStyles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const StatBlock = ({ label, value, icon }: { label: string; value: string; icon?: string }) => (
  <View style={AppStyles.statBlock}>
    <Text style={AppStyles.statValue}>
      {icon ? (
        <MaterialCommunityIcons name={icon} size={14} color="#FFD700" />
      ) : null}{' '}
      {value}
    </Text>
    <Text style={AppStyles.statLabel}>{label}</Text>
  </View>
);

export default ProfileScreen;