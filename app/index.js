import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from '@expo-google-fonts/ibm-plex-sans-thai';
import { router } from 'expo-router';
export default function SplashScreenComponent() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    'IBMPlexSansThai-Bold': require('../assets/fonts/IBMPlexSansThai-Bold.ttf'),
  });

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        router.replace('/auth/LoginScreen');
      }, 1000);
    }, 1000);
  }, []);

  if (!fontsLoaded || isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>CHECKTOR</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: "#000",
    fontFamily: 'IBMPlexSansThai-Bold',
  },
  logo: {
    marginBottom: 20,
  },
});
