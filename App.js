  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { SafeAreaProvider } from 'react-native-safe-area-context';
  import { Ionicons } from '@expo/vector-icons';
  import { TouchableOpacity } from 'react-native';

  import SplashScreen from './AfterHour Code/SplashScreen';
  import HomeScreen from './AfterHour Code/HomeScreen';
  import SearchScreen from './AfterHour Code/SearchScreen';
  import NotificationsScreen from './AfterHour Code/NotificationsScreen';
  import ChatListScreen from './AfterHour Code/ChatScreen';
  import JoinChatScreen from './AfterHour Code/JoinChatScreen';
  import CreatePostScreen from './AfterHour Code/CreatePostScreen';
  import PostTopicsScreen from './AfterHour Code/Components/PostTopicsScreen';
  import ProfileScreen from './AfterHour Code/ProfileScreen';
  import SettingsScreen from './AfterHour Code/SettingScreen';
  import CustomDrawer from './AfterHour Code/CustomDrawer';

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const ChatStack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // Chat Navigator
  const ChatStackScreen = () => {
    return (
      <ChatStack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
        <ChatStack.Screen name="ChatList" component={ChatListScreen} />
        <ChatStack.Screen name="JoinChat" component={JoinChatScreen} />
      </ChatStack.Navigator>
    );
  };

  const DrawerNavigator = () => (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} options={{ title: "Home" }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );

  // Bottom Tab Navigation
  const MainTabs = ({ navigation }) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#111',
            height: 60,
            paddingBottom: 10,
          },
          tabBarIcon: ({ color }) => {
            let iconName;
            let iconColor = color;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Post':
                iconName = 'add-circle';
                iconColor = '#8A4FFF';
                break;
              case 'Notifications':
                iconName = 'notifications';
                break;
              case 'Messages':
                iconName = 'chatbubble';
                break;
            }

            return <Ionicons name={iconName} size={30} color={iconColor} />;
          },
          tabBarActiveTintColor: '#6a0dad',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen
          name="Post"
          component={() => null}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate('CreatePost')}
                style={{ alignItems: 'center', justifyContent: 'center' }}
              >
                <Ionicons name="add-circle" size={48} color="#8A4FFF" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Messages" component={ChatStackScreen} />
      </Tab.Navigator>
    );
  };

  // App Root Stack
  const App = () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Main" component={DrawerNavigator} />
            <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ presentation: 'modal' }} />
            <Stack.Screen name="PostTopics" component={PostTopicsScreen} options={{ presentation: 'modal' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };

  export default App;
