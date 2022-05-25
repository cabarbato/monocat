import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';
import { windowHeight, windowWidth } from '../utils';


/* TODO: 
  1. Eventually convert buttons to create new/open existing projects
  2. Save files locally or authenticate and associate projects in a db?
*/


const HomeScreen = (props: PropsType) => {
  const styles: StyleType = StyleSheet.create({
    Main: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: windowHeight,
      
    },
    Logo: {
      width: windowHeight / 2,
      height: windowHeight / 2,
      marginBottom: root_size
    },
    Button: {
      width: windowHeight / 2,
    },
    ButtonText: {
      fontFamily: 'Fredoka One',
      textTransform: 'uppercase'
      }
  });

  return (
    <View style={styles.Main}>
      <Image
        style={styles.Logo}
        source={require('../../assets/images/splash.png')}
      />

      <Button
        mode="contained"
        style={styles.Button}
        labelStyle={styles.ButtonText}
        onPress={() => props.navigation.navigate('Editor')}>New Project</Button>
    </View>
  )
};

export default withTheme(HomeScreen);
