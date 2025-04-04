import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './AfterHour Code/SplashScreen';
import HomeScreen from './AfterHour Code/HomeScreen';
import SearchScreen from './AfterHour Code/SearchScreen';
import NotificationsScreen from './AfterHour Code/NotificationsScreen';
import ChatListScreen from './AfterHour Code/ChatScreen';
import JoinChatScreen from './AfterHour Code/JoinChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ChatStack = createStackNavigator();

// Chat Navigator
const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
      <ChatStack.Screen name="ChatList" component={ChatListScreen} />
      <ChatStack.Screen name="JoinChat" component={JoinChatScreen} />
    </ChatStack.Navigator>
  );
};

// Bottom Tab Navigation
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#111', 
          height: 60,
          paddingBottom: 10,
        },
        tabBarIcon: ({ color, size }) => {
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
      <Tab.Screen name="Post" component={HomeScreen} />
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
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;