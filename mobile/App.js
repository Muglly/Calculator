import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {
  useFonts,
  Inconsolata_400Regular,
  Inconsolata_600SemiBold,
} from '@expo-google-fonts/inconsolata';

import { Home } from './src/screen/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Inconsolata_400Regular,
    SemiBold: Inconsolata_600SemiBold,
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Home /> : <Text>Carregando</Text>}
    </View>
  );
}
