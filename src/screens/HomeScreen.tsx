import React from 'react';
import { Image, View, Button, StyleSheet } from 'react-native';

/* TODO: 
  1. Eventually convert buttons to create new/open existing projects
  2. Save files locally or authenticate and associate projects in a db?
*/

const EditorScreen = ({ navigation }) => (
  <View style={styles.HomeMain}>
    <Image
      style={styles.HomeLogo}
      source={require('../../assets/images/splash.png')}
    />

    <Button 
    style={styles.HomeButton}
    title="New Project" 
    onPress={() => navigation.navigate('Editor')} />
  </View>
);

const styles = StyleSheet.create({
  HomeMain: {
    paddingTop: 50,
  },
  HomeLogo: {
    width: 100,
    height: 100,

  },
  HomeButton: {

  }
});

export default EditorScreen;
