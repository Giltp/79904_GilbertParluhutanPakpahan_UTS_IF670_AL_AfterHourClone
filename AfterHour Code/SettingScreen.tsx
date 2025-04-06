import React from 'react';
import { View, Text, ScrollView,TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from './StyleSheets';

const SettingRow = ({ label, icon, onPress }: {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void;
}) => (
  <TouchableOpacity style={AppStyles.settingrow} onPress={onPress} activeOpacity={0.7}>
    <View style={AppStyles.rowLeft}>
      {icon}
      <Text style={AppStyles.rowLabel}>{label}</Text>
    </View>
    <Icon name="chevron-right" size={18} color="#ccc" />
  </TouchableOpacity>
);

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={AppStyles.settingcontainer}>
      {/* Header */}
      <View style={AppStyles.settingheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={AppStyles.headerTitle}>Settings</Text>
        <TouchableOpacity>
          <Text style={AppStyles.supportText}>Support</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={AppStyles.scroll}>
        {/* Settings */}
        <View style={AppStyles.sectionWrapper}>
          <Text style={AppStyles.settingsectionTitle}>Settings</Text>
          <View style={AppStyles.section}>
            <SettingRow label="Account" icon={<Ionicons name="person" size={20} color="#ccc" />} />
            <SettingRow label="Notifications" icon={<Ionicons name="notifications" size={20} color="#ccc" />} />
            <SettingRow label="Privacy and safety" icon={<Ionicons name="lock-closed" size={20} color="#ccc" />} />
            <SettingRow label="Connected accounts" icon={<Ionicons name="shield-checkmark" size={20} color="#ccc" />} />
            <SettingRow label="Enter invite code" icon={<Ionicons name="mail" size={20} color="#ccc" />} />
            <SettingRow label="Help and feedback" icon={<Ionicons name="help-circle" size={20} color="#ccc" />} />
          </View>
        </View>

        {/* Divider */}
        <View style={AppStyles.divider} />

        {/* Connect */}
        <View style={AppStyles.sectionWrapper}>
          <Text style={AppStyles.settingsectionTitle}>Connect</Text>
          <View style={AppStyles.section}>
            <SettingRow label="Refer a friend" icon={<Ionicons name="person-add" size={20} color="#ccc" />} />
            <SettingRow label="Join our Discord" icon={<FontAwesome5 name="discord" size={20} color="#ccc" />} />
            <SettingRow label="Follow us on X" icon={<FontAwesome5 name="twitter" size={20} color="#ccc" />} />
            <SettingRow label="Follow us on TikTok" icon={<FontAwesome5 name="tiktok" size={20} color="#ccc" />} />
            <SettingRow label="Follow us on Instagram" icon={<Ionicons name="logo-instagram" size={20} color="#ccc" />} />
          </View>
        </View>


        {/* Log Out */}
        <TouchableOpacity style={AppStyles.logout}>
          <Text style={AppStyles.logoutText}>Log out</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={AppStyles.settingfooter}>
          <Text style={AppStyles.footerText}>Made with 💎 🤝</Text>
          <Text style={AppStyles.footerVersion}>v4.3.0 (68) - Production</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;