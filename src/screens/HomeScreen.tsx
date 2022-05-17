import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { PropsType, StyleType } from '../typings';


/* TODO: 
  1. Eventually convert buttons to create new/open existing projects
  2. Save files locally or authenticate and associate projects in a db?
*/

const styles: StyleType = StyleSheet.create({
  HomeMain: {
    paddingTop: 50,
    margin: "auto"
  },
  HomeLogo: {
    width: 300,
    height: 300,
    margin: "auto",
    marginBottom: 50
  }
});


const EditorScreen = (props: PropsType) => (
  <View style={styles.HomeMain}>
    <Image
      style={styles.HomeLogo}
      source={require('../../assets/images/splash.png')}
    />

    <Button
      mode="contained"
      onPress={() => props.navigation.navigate('Editor')}>New Project</Button>
  </View>
);

export default EditorScreen;
