import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme, FAB, List, Provider as PaperProvider } from 'react-native-paper';
import EditorPane from '../containers/EditorPane';
import EditorMenuItem from '../containers/EditorMenuItem';
import EditorModal from '../containers/EditorModal';
import theme, { root_size } from '../styles/theme';
import menu_data from '../../assets/data/editor-menu.json';
import { PropsType, StyleType } from '../typings';
import { windowHeight, windowWidth } from '../utils';


const EditorScreen = (props) => {

  const styles: StyleType = StyleSheet.create({
    Content: {
      display: 'flex',
      flexDirection: 'row',
      padding: root_size,
      alignItems: 'stretch',
      maxHeight: windowHeight,
      overflow: 'hidden'
    },
    MenuList: {
      display: 'flex',
      flexDirection: 'column',
      width: windowWidth / (windowWidth > 768 ? 3 : 2),
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
      position: 'relative'
    },
    Fab: {
      position: 'absolute',
      margin: 50,
      right: 0,
      bottom: 0,
    }
  });

  return (
    <PaperProvider theme={theme}>
      <View style={styles.Content}>
        <View style={styles.MenuList}>
          <List.AccordionGroup>
            {menu_data.map((d: PropsType) => <EditorMenuItem
              name={d.name}
              key={d.name}
              color={d.color}
              icon={d.icon} />)}
          </List.AccordionGroup>
        </View>

        <View style={styles.Editor}>
          <EditorPane height={windowHeight} />
          <FAB
            style={styles.Fab}
            icon="play"
            onPress={() => props.navigation.navigate('Preview')}
          />
        </View>
      </View>

      <EditorModal />
    </PaperProvider>
  )
}

export default withTheme(EditorScreen);