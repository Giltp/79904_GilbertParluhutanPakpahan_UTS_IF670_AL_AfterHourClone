import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './AfterHour Code/SplashScreen';
import HomeScreen from './AfterHour Code/HomeScreen';
import SearchScreen from './AfterHour Code/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 🔹 Bottom Tab Navigation (Home & Search)
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#111', 
          height: 60, // ✅ Make the bar taller
          paddingBottom: 10, // ✅ Push icons up a bit
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconColor = color; // Default color

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Post':
              iconName = 'add-circle';
              iconColor = '#8A4FFF'; // Green
              break;
            case 'Notifications':
              iconName = 'notifications';
              break;
            case 'Messages':
              iconName = 'chatbubble';
              break;
          }

          return <Ionicons name={iconName} size={30} color={iconColor} />; // ✅ Bigger icons
        },
        tabBarActiveTintColor: '#6a0dad',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Right now, all will navigate to HomeScreen */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Post" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={HomeScreen} />
      <Tab.Screen name="Messages" component={HomeScreen} />
    </Tab.Navigator>
  );
};


// 🔹 Stack Navigation (Splash Screen + Main Tabs)
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
