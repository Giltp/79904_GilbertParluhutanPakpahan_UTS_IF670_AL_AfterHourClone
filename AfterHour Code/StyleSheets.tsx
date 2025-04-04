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
  BLUE: '#3B82F6', // Blue for comments/bookmarks
  GOLD: '#FFD700', // Gold tint for high-value balances
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },

  // 🔹 Top Bar Styles
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.SECONDARY_DARK,
  },
  topBarTitle: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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

  // 🔹 Navigation Tabs Styles
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

  // 🔹 Post Card Styles
  postCard: {
    backgroundColor: COLORS.SECONDARY_DARK,
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: COLORS.WHITE,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Adds depth on Android
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
    color: COLORS.PRIMARY_PURPLE,
    fontWeight: 'bold',
  },
  userValue: {
    color: COLORS.GREEN,
  },
  userBalance: {
    color: COLORS.GOLD,
    fontSize: 14,
    fontWeight: '600',
  },
  postTime: {
    color: COLORS.GRAY,
    fontSize: 12,
  },
  postTitle: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    fontSize: 16,
    marginBottom: 5,
  },
  postContent: {
    color: COLORS.WHITE,
    marginBottom: 10,
    fontSize: 14,
  },
  postInteractions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  interactionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    color: COLORS.WHITE,
    marginLeft: 5,
  },

  // 🔹 Bottom Navigation Styles
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

  // 🔹 Search Bar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARY_DARK,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: 16,
  },

  // 🔹 Topics Section
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  topicButton: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
  },
  topicText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 🔹 Section Titles
  sectionTitle: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
  },

  // 🔹 Trader Card
  traderCard: {
    backgroundColor: COLORS.SECONDARY_DARK,
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: 150,
  },
  traderName: {
    color: COLORS.PRIMARY_PURPLE,
    fontWeight: 'bold',
    fontSize: 16,
  },
  traderBalance: {
    color: COLORS.GOLD,
    fontSize: 14,
    marginVertical: 5,
  },
  traderTips: {
    color: COLORS.GREEN,
    fontSize: 14,
    marginVertical: 5,
  },
  followButton: {
    backgroundColor: COLORS.BLUE,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  followText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 🔹 Stock Cards
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: COLORS.SECONDARY_DARK,
    marginVertical: 5,
    borderRadius: 10,
  },
  stockLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  stockText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },
  stockDetails: {
    color: COLORS.GRAY,
    fontSize: 12,
  },

  // 🔹 Most Owned & Watched Stocks
  stockCard: {
    backgroundColor: COLORS.SECONDARY_DARK,
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: 150,
  },
  stockName: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
  },
  stockSubtext: {
    color: COLORS.GRAY,
    fontSize: 12,
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  addButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 🔹 Filter Navigation Styles
  // 🔹 Notification Card Styles
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.SECONDARY_DARK,
    padding: 15,
    marginVertical: 8, // Adds gap between notifications
    borderRadius: 12, // Rounded edges
    shadowColor: COLORS.WHITE,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3, // Depth effect for Android
  },
  notificationAvatar: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationUsername: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 15,
  },
  notificationAction: {
    color: COLORS.GRAY,
    fontSize: 14,
  },
  notificationMessage: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginTop: 2,
  },
  notificationTimestamp: {
    color: COLORS.GRAY,
    fontSize: 12,
    marginTop: 4,
  },
  notificationMenu: {
    color: COLORS.GRAY,
    fontSize: 18,
  },
  filterNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: COLORS.SECONDARY_DARK,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
  activeFilter: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  filterText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  activeFilterText: {
    color: COLORS.WHITE,
  },

   // 🔹 Screen Title
   screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 15,
  },

  // 🔹 Cards Screen
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#111",
  },
  chatLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  chatDetails: {
    flex: 1,
  },
  chatTicker: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  chatLastMessage: {
    fontSize: 14,
    color: "#888",
  },
  chatTimestamp: {
    fontSize: 12,
    color: "#666",
  },
  chatCompany: {
    fontSize: 14,
    color: "#aaa",
  },

   // 🔹 Join Chat Card
   joinChatCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
    backgroundColor: COLORS.SECONDARY_DARK,
    borderRadius: 10,
    marginVertical: 5,
  },

  // 🔹 Join Button
  joinButton: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  joinButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },

  // 🔹 Floating Button
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.WHITE,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // For Android shadow
  },

  // 🔹 Close Button (Exit Join Chat)
  closeButton: {
    marginTop: 15,
    backgroundColor: COLORS.RED,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  closeButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppStyles;