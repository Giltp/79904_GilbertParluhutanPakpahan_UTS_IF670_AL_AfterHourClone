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
    paddingTop: 30,
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
  
  // 🔹 Create Post Screen Styles
  createPostContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
  createPostTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: COLORS.SECONDARY_DARK,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  cancel: {
    color: COLORS.GRAY,
    fontSize: 16,
  },
  header: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  postButton: {
    color: COLORS.PRIMARY_PURPLE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledPost: {
    color: COLORS.GRAY,
  },
  alertContainer: {
    backgroundColor: '#ffdddd',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ff4444',
  },
  
  alertText: {
    color: '#cc0000',
    fontSize: 14,
    fontWeight: '500',
  },
  
  contentContainer: {
    padding: 15,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.GRAY,
    marginRight: 10,
  },
  titleInput: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
    paddingVertical: 8,
  },
  bodyInput: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginTop: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
  },
  charCount: {
    color: COLORS.GRAY,
    fontSize: 12,
    textAlign: 'right',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: COLORS.SECONDARY_DARK,
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  footerIcon: {
    fontSize: 20,
    color: COLORS.WHITE,
  },

  
  // 🔹 Create Post Topics Modal Screen Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topic: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  topicIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  topicName: {
    color: '#fff',
    fontSize: 16,
  },

  selectedTopicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginLeft: 10,
    flex: 1,
    alignItems: 'center',
  },
  
  topicBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 4,
  },
  
  addTopicBubble: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  
  topicBubbleText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 6,
  },
  
  topicRemove: {
    color: '#f66',
    fontSize: 14,
  },

  // 🔹 Custom Drawer Styles
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  drawerheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerlogo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoIcon: {
    color: '#FFD700',
  },
  fireRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  fireText: {
    color: '#fff',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  drawerusername: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  followRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 8,
  },
  followStat: {
    color: '#fff',
    fontWeight: 'bold',
  },
  followLabel: {
    fontWeight: 'normal',
    color: '#aaa',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 12,
    width: '48%',
  },
  cardLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  connectText: {
    color: '#8A4FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  walletText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  navSection: {
    marginTop: 24,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  drawerItemText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },
  inviteCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  inviteText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  arrowCircle: {
    backgroundColor: '#8A4FFF',
    height: 34,
    width: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  
  // 🔹Profile Screen Styles
  profilecontainer: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  profileheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  profileavatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  badgeIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    padding: 4,
  },
  profileusername: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBlock: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  bio: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bioText: {
    color: '#A770FF',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  actionText: {
    color: '#fff',
    marginLeft: 6,
  },
  postsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginBottom: 10,
  },
  postsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdown: {
    color: '#aaa',
    fontSize: 14,
  },
  noPosts: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noPostsText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  noPostsSub: {
    fontSize: 14,
    color: '#aaa',
    marginVertical: 5,
  },
  createButton: {
    marginTop: 16,
    backgroundColor: '#A770FF',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 25,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  
  // 🔹Settings Screen Styles
  settingcontainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  scroll: {
    paddingBottom: 40,
  },
  settingheader: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
    borderBottomWidth: 1,
    borderBottomColor: '#1c1c1e',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  supportText: {
    fontSize: 14,
    color: '#A770FF',
    fontWeight: '500',
  },
  section: {
    marginTop: 16,
  },
  settingrow: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#222',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  logout: {
    marginTop: 24,
    alignItems: 'center',
  },
  logoutText: {
    color: '#A770FF',
    fontSize: 15,
    fontWeight: '600',
  },
  settingfooter: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#ccc',
  },
  footerVersion: {
    fontSize: 12,
    color: '#444',
    marginTop: 4,
  },
  sectionWrapper: {
  marginTop: 16,
  paddingHorizontal: 5,
  },
  settingsectionTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 3,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginLeft: 20,
  },
});

export default AppStyles;