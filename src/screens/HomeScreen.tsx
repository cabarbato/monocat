import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';
import { windowHeight, playSound } from '../utils';


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
  audio = require('../../assets/audio'),
  initial_state = {
    sound: null,
    music: null
  };

const HomeScreen = (props: PropsType) => {
  const [state, setState] = useState(initial_state);

  useEffect(() => {
    state.sound ? () => state.sound.unloadAsync() : undefined
    return () => state.music ? state.music.unloadAsync() : undefined
  }, [state]);

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
      minWidth: 120
    },
    ButtonText: {
      fontFamily: 'Fredoka One',
      textTransform: 'uppercase'
    }
  });

  return (
    <View style={styles.Main} onLayout={() => {
      !state.music ? 
        playSound(audio.music.splash.url, { loop: true })
        .then(music => setState({ ...state, music })) :
        setState({ ...state, music: null })
    }} >
      <Image
        style={styles.Logo}
        source={images.logo.url}
      />

      <Button
        mode="contained"
        style={styles.Button}
        labelStyle={styles.ButtonText}
        onPress={() => {
          playSound(audio.sfx.preview).then((sound) => setState({ ...state, sound }))
          props.navigation.navigate('Editor')
        }}>New Project</Button>
    </View>
  )
};

export default withTheme(HomeScreen);
