import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    setTimeout(async () => {
      // This tells the splash screen to hide immediately!
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>EmanciTech Application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
