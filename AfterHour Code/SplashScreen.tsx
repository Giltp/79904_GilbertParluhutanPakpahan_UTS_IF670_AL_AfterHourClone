import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => navigation.replace('Main'), 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6A0DAD' }}>
      <Animated.Image
        source={require('../assets/AfterHourLogo.jpeg')}
        style={{ width: 200, height: 200, opacity: fadeAnim }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
