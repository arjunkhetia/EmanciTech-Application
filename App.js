import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Appearance } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeSwitch from './components/ThemeSwitch';
import { styles } from './styles';

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
  let [darkMode, setDarkMode] = useState(Appearance.getColorScheme() == 'light' ? false : true);

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
        <View style={darkMode ? styles.darkcontainer : styles.lightcontainer} onLayout={onLayoutRootView}>
          <Text style={styles.text}>EmanciTech Application</Text>
          <Text>Hello {value}!</Text>
          <Text>Current Color Scheme: {darkMode}</Text>
          <Text>{"\n"}</Text>
          <ThemeSwitch value={darkMode} onChange={() => setDarkMode(!darkMode)}></ThemeSwitch>
          <StatusBar style="auto" />
        </View>
    </SafeAreaProvider>
  );
}
