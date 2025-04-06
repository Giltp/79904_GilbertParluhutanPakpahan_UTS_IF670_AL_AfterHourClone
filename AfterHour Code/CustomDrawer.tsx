import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AppStyles from './StyleSheets';

type CustomDrawerProps = {
  streakDays: number;
};

const CustomDrawer = ({ streakDays = 3 }: CustomDrawerProps) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#111' }}>
      <DrawerContentScrollView
        contentContainerStyle={AppStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={AppStyles.drawerheader}>
          <Text style={AppStyles.drawerlogo}>
            AfterH<Text style={AppStyles.logoIcon}>o</Text>ur
          </Text>
          <View style={AppStyles.fireRow}>
            <Text style={AppStyles.fireIcon}>🔥</Text>
            <Text style={AppStyles.fireText}>{streakDays} days</Text>
          </View>
        </View>

        {/* Profile Card */}
        <TouchableOpacity onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
          <View style={AppStyles.card}>
            <Image source={require('../assets/ProfilePicture.jpeg')} style={AppStyles.avatar} />
            <Text style={AppStyles.drawerusername}>ate_a_pie</Text>
            <View style={AppStyles.followRow}>
              <Text style={AppStyles.followStat}>
                0 <Text style={AppStyles.followLabel}>Followers</Text>
              </Text>
              <Text style={AppStyles.followStat}>
                3 <Text style={AppStyles.followLabel}>Following</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Wallet / Portfolio */}
        <View style={AppStyles.row}>
          <View style={AppStyles.miniCard}>
            <Text style={AppStyles.cardLabel}>Portfolio</Text>
            <Text style={AppStyles.connectText}>Connect</Text>
          </View>
          <View style={AppStyles.miniCard}>
            <Text style={AppStyles.cardLabel}>Wallet</Text>
            <Text style={AppStyles.walletText}>
              1,360 <FontAwesome name="circle" size={12} color="#FFD700" />
            </Text>
          </View>
        </View>

        {/* Navigation Stack */}
        <View style={AppStyles.navSection}>
          <DrawerItem label="Tips" icon="repeat" />
          <DrawerItem label="Saved" icon="bookmark" />
          <DrawerItem label="Settings" icon="settings" onPress={() => navigation.navigate('Main', { screen: 'Settings' })}/>
          <DrawerItem label="Support" icon="life-buoy" />
        </View>
      </DrawerContentScrollView>

      {/* Invite Friends - Sticky Bottom */}
      <View style={AppStyles.inviteCard}>
        <Text style={AppStyles.inviteText}>
          🥳 🧑🏾‍🎤 Invite friends,{"\n"}get 100,000 coins
        </Text>
        <TouchableOpacity>
          <View style={AppStyles.arrowCircle}>
            <Icon name="arrow-right" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type DrawerItemProps = {
  label: string;
  icon: string;
  onPress?: () => void;
};

const DrawerItem = ({ label, icon, onPress }: DrawerItemProps) => (
  <TouchableOpacity style={AppStyles.drawerItem} onPress={onPress}>
    <Icon name={icon} size={18} color="#fff" />
    <Text style={AppStyles.drawerItemText}>{label}</Text>
  </TouchableOpacity>
);

export default CustomDrawer;