import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme, FAB, Provider as PaperProvider } from 'react-native-paper';
import EditorPane from '../containers/EditorPane';
import EditorMenuItem from '../containers/EditorMenuItem';
import EditorModal from '../containers/EditorModal';
import theme, { root_size } from '../styles/theme';
import menu_data from '../../assets/data/editor-menu.json';
import { PropsType, StyleType } from '../typings';
import { windowHeight, windowWidth } from '../utils';
import playSound from '../features/sound';

const audio = require('../../assets/audio');

const EditorScreen = (props) => {
  const [sound, setSound] = useState(null);
  useEffect(() => sound ? () => sound.unloadAsync() : undefined, [sound]);

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
      <View style={styles.Content}>
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
              playSound(audio.sfx.preview).then(setSound)
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