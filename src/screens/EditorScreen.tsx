import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { withTheme, FAB, List, Provider as PaperProvider } from 'react-native-paper';
import EditorPane from '../containers/EditorPane';
import EditorMenuItem from '../containers/EditorMenuItem';
import EditorModal from '../containers/EditorModal';
import theme from '../styles/theme';
import menu_data from '../../assets/data/editor-menu.json';
import { PropsType, StyleType } from '../typings';


const EditorScreen = (props) => {
  const [visible, setVisible] = useState(false),
    windowWidth = Dimensions.get('window').width,
    windowHeight = Dimensions.get('window').height;

  const styles: StyleType = StyleSheet.create({
    Content: {
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
      innerHeight: windowHeight
    },
    MenuList: {
      display: 'flex',
      flexDirection: 'column',
      width: windowWidth / (windowWidth > 768 ? 3 : 2),
      innerHeight: windowHeight,
      margin: 10,
    },
    Editor: {
      flexGrow: 2,
      innerHeight: windowHeight
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

      <EditorModal visible={visible} setVisible={setVisible} />
    </PaperProvider>
  )
}

export default withTheme(EditorScreen);