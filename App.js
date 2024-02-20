import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const value = process.env.EXPO_PUBLIC_SECRET;
  const [fontsLoaded, fontError] = useFonts({
    'Brolink-Outline': require('./assets/fonts/Brolink-Outline.ttf'),
    'Brolink-Regular': require('./assets/fonts/Brolink-Regular.ttf'),
    'Informe-Bold': require('./assets/fonts/Informe-Bold.ttf'),
    'Informe-Light': require('./assets/fonts/Informe-Light.ttf'),
    'Informe-Medium': require('./assets/fonts/Informe-Medium.ttf'),
    'Informe-Regular': require('./assets/fonts/Informe-Regular.ttf'),
    'Sogtric-Outline': require('./assets/fonts/Sogtric-Outline.otf'),
    'Sogtric-Regular': require('./assets/fonts/Sogtric-Regular.otf'),
    'Veltron-Regular': require('./assets/fonts/Veltron-Regular.ttf'),
  });
  let colorScheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // This tells the splash screen to hide immediately!
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={styles.text}>EmanciTech Application</Text>
        <Text>Hello {value}!</Text>
        <Text>Color Scheme: {colorScheme}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // fontFamily: 'Brolink-Regular',
    fontFamily: Platform.select({
      android: 'Brolink-Regular',
      ios: 'Brolink-Outline',
    }),
    fontSize: 15,
  },
});
