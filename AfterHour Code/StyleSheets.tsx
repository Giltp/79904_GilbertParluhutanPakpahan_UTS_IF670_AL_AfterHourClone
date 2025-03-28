import { StyleSheet } from 'react-native';

// Color Constants
export const COLORS = {
  BACKGROUND_DARK: '#121212',
  SECONDARY_DARK: '#1E1E1E',
  PRIMARY_PURPLE: '#8A4FFF',
  WHITE: '#FFFFFF',
  GRAY: '#888888',
  GREEN: '#4CAF50',
  RED: '#F44336',
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_DARK,
    justifyContent: 'center',  // ✅ Center content vertically
    alignItems: 'center',  // ✅ Center content horizontally
  },
  // Top Bar Styles
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.SECONDARY_DARK,
  },
  logo: {
    width: 30,
    height: 30,
  },
  marketTimerContainer: {
    alignItems: 'center',
  },
  marketTimer: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  marketTimerText: {
    color: COLORS.GRAY,
    fontSize: 12,
  },

  // Navigation Tabs Styles
  navigationTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: COLORS.SECONDARY_DARK,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.PRIMARY_PURPLE,
    paddingBottom: 5,
  },
  inactiveTab: {
    paddingBottom: 5,
  },
  activeTabText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: COLORS.GRAY,
  },

  // Post Card Styles
  postCard: {
    backgroundColor: COLORS.SECONDARY_DARK,
    padding: 15,
    marginVertical: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postUserInfo: {
    flex: 1,
  },
  username: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  userValue: {
    color: COLORS.GREEN,
  },
  postTime: {
    color: COLORS.GRAY,
  },
  postContent: {
    color: COLORS.WHITE,
    marginBottom: 10,
  },
  postInteractions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interactionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Bottom Navigation Styles
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY_DARK,
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  centerNavItem: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 30,
    padding: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: COLORS.RED,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  notificationText: {
    color: COLORS.WHITE,
    fontSize: 10,
  },
});

export default AppStyles;