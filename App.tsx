import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/theme';
import { expo } from './app.json';


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  )
};


AppRegistry.registerComponent(expo.name, () => App);

export default App;