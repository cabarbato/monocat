import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/theme';
import * as Font from 'expo-font';
import { expo } from './app.json';
import { Provider } from 'react-redux';
import store from "./src/store";

let customFonts = {
  'Courier Prime': require('./assets/fonts/CourierPrime-Regular.ttf'),
  'Courier Prime Bold': require('./assets/fonts/CourierPrime-Bold.ttf'),
  'Fredoka One': require('./assets/fonts/FredokaOne-Regular.ttf'),
}

const App = () => {
  const [state, setState] = React.useState({
    fontsLoaded: false
  })

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setState({ fontsLoaded: true });
  }
  React.useEffect(() => {loadFontsAsync()}, [])
  
  if (state.fontsLoaded) {
  return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
  )}
  else return <></>
};


AppRegistry.registerComponent(expo.name, () => App);

export default App;