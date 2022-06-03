import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme, FAB, Provider as PaperProvider } from 'react-native-paper';
import EditorPane from '../containers/EditorPane';
import EditorMenuItem from '../containers/EditorMenuItem';
import EditorModal from '../containers/EditorModal';
import theme, { root_size } from '../styles/theme';
import menu_data from '../../assets/data/editor-menu.json';
import { PropsType, StyleType } from '../typings';
import { windowHeight, windowWidth, playSound } from '../utils';

const audio = require('../../assets/audio'),
  initial_state = {
    sound: null,
    music: null
  };

const EditorScreen = (props) => {
  const [state, setState] = useState(initial_state);

  useEffect(() => {
    state.sound ? () => state.sound.unloadAsync() : undefined
    return () => state.music ? state.music.unloadAsync() : undefined
  }, [state]);

  const column_width = windowWidth / (windowWidth > 768 ? 3 : 2)
  const styles: StyleType = StyleSheet.create({
    Content: {
      display: 'flex',
      flexDirection: 'row',
      padding: root_size,
      alignItems: 'stretch',
      height: windowHeight,
      overflow: 'hidden'
    },
    MenuList: {
      display: 'flex',
      flexDirection: 'column',
      width: column_width,
      innerHeight: windowHeight,
      margin: root_size,
      zIndex: 3,
      elevation: 3
    },
    Editor: {
      flexGrow: 2,
      zIndex: 2,
      elevation: 2,
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'row',
      position: 'relative',
      width: windowWidth - column_width
    },
    Fab: {
      position: 'absolute',
      margin: root_size * 4,
      right: root_size * 4,
      bottom: 0,
    }
  });

  return (
    <PaperProvider theme={theme}>
      <View style={styles.Content} onLayout={() => {
        !state.music ? 
          playSound(audio.music.bubble.url, { loop: true, volume: .33 })
          .then(music => setState({ ...state, music })) :
          setState({ ...state, music: null })
      }}>
        <View style={styles.MenuList}>
          {menu_data.map((d: PropsType, i) => {
            return d.active ? <EditorMenuItem
              name={d.name}
              key={d.name}
              color={d.color}
              icon={d.icon}
              zindex={menu_data.length - i} /> : null
          })}
        </View>

        <View style={styles.Editor}>
          <EditorPane height={windowHeight} width={windowWidth - column_width} />
          <FAB
            style={styles.Fab}
            icon="play"
            onPress={() => {
              playSound(audio.sfx.preview).then(sound => setState({ ...state, sound }))
              props.navigation.navigate('Preview')
            }}
          />
        </View>
      </View>

      <EditorModal />
    </PaperProvider>
  )
}

export default withTheme(EditorScreen);