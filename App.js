import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  // 👇️ notice that this function is not async
  useEffect(() => {

    // ✅ define the async function here
    async function showApplication() {
      if (appIsReady) {
        // This tells the splash screen to hide immediately!
        await SplashScreen.hideAsync();
      }
    }

    // Artificially delay for two seconds to simulate a slow loading
    setTimeout(() => {
      // Tell the application to render
      setAppIsReady(true);
    }, 2000);

    // 👇️ call the function here
    showApplication();

  }, [appIsReady]);

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
