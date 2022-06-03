import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import playSound from '../features/sound';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';
import { windowHeight, windowWidth } from '../utils';


/* TODO: 
  1. Eventually convert buttons to create new/open existing projects
  2. Save files locally or authenticate and associate projects in a db?
  3. create an index of images, similar to audio
*/

const images = {
  logo: {
    alt: 'monocat',
    url: require('../../assets/images/splash.png')
  }
},
  audio = require('../../assets/audio');

const HomeScreen = (props: PropsType) => {
  const [sound, setSound] = useState(null);
  const [music, setMusic] = useState(null);
  useEffect(() => {
    sound ? () => sound.unloadAsync() : undefined
    //music ? () => music.unloadAsync() : undefined
    return () => (music ? music.stopAsync() : undefined)
  }, [sound, music]);

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
    <View style={styles.Main} onLayout={() => {
      !music ? playSound(audio.music.splash).then(setMusic) : setMusic(null)
    }}>
      <Image
        style={styles.Logo}
        source={images.logo.url}
      />

      <Button
        mode="contained"
        style={styles.Button}
        labelStyle={styles.ButtonText}
        onPress={() => {
          playSound(audio.sfx.preview).then(setSound)
          props.navigation.navigate('Editor')
        }}>New Project</Button>
    </View>
  )
};

export default withTheme(HomeScreen);
