import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './components/header';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'SF-Pro-Rounded-Bold': require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'SF-Pro-Rounded-Heavy': require('./assets/fonts/SF-Pro-Rounded-Heavy.otf'),
    'SF-Pro-Rounded-Medium': require('./assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'SF-Pro-Rounded-Regular': require('./assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'SF-Pro-Rounded-Semibold': require('./assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'SFMono-Medium': require('./assets/fonts/SFMono-Medium.otf'),
    'SFMono-Regular': require('./assets/fonts/SFMono-Regular.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider  onLayout={onLayoutRootView}>
      <SafeAreaView style={{ marginHorizontal: 8 }} >
        <Header />
        <View>
          <Text style={{ fontFamily: 'SF-Pro-Rounded-Bold' }} >Open up App.js to start working on your app!</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
