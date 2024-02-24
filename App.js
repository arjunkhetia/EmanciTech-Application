import { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Appearance } from 'react-native';
import { Text, View, Appearance, BackHandler, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeSwitch from './components/ThemeSwitch';
import { styles } from './styles';
import IntroSlider from './components/IntroSlider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const value = process.env.EXPO_PUBLIC_SECRET;
  const [fontsLoaded, fontsError] = useFonts({
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
  const [showIntro, setShowIntro] = useState(false);

  const onDoneSetShowIntro = () => {
    // AsyncStorage.setItem('showIntro', 'false');
    setShowIntro(false);
  };

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      AsyncStorage.getItem('showIntro', (err, result) => {
        if (!result) {
          setShowIntro(true);
        }
        setTimeout(async () => {
          // This tells the splash screen to hide immediately!
          await SplashScreen.hideAsync();
        }, 2000);
      });
    }
  }, [fontsLoaded, fontsError]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit application?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaProvider>
      {showIntro && <IntroSlider onDone={onDoneSetShowIntro}></IntroSlider>}
      {!showIntro && 
        <View style={darkMode ? styles.darkcontainer : styles.lightcontainer}>
          <Text style={darkMode ? styles.darktext : styles.lighttext}>EmanciTech Application</Text>
          <Text style={darkMode ? styles.darktext : styles.lighttext}>Hello {value}!</Text>
          <Text>{"\n"}</Text>
          <ThemeSwitch value={darkMode} onChange={() => setDarkMode(!darkMode)}></ThemeSwitch>
          <StatusBar style={darkMode ? 'light' : 'dark'} />
          <StatusBar translucent={false} style={darkMode ? 'light' : 'dark'} />
        </View>
      }
    </SafeAreaProvider>
  );
}
