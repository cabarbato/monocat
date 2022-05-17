import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Button , withTheme, FAB, List } from 'react-native-paper';
import EditorPane from '../containers/EditorPane';
import menu_data from '../../assets/data/editor-menu.json';
import menu_item_data from '../../assets/data/editor-menu-event.json';
import { PropsType, StyleType } from '../typings';


/* TODO: 
  1. Left nav bar - File, Search, Debug/Preview only for now
  2. Drag and Drop UX - maybe a limited number of chips to use for now?
  3. Probably also a settings modal
*/

const styles: StyleType = StyleSheet.create({
  Content: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  MenuList: {

  },
  MenuListItem: {
    marginVertical: 50,
    paddingVertical: 20
  },
  Editor: {
    flexGrow: 2
  }, 
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

const EditorScreen = () => <View style={styles.Content}>
  <List.AccordionGroup>
    {menu_data.map((d) => <List.Accordion title={d.name} id={d.name} theme={styles.MenuListItem}>
      {/* {menu_item_data[d.name]["type"] == "drawer" ? menu_item_data[d.name]["content"].map((datum) => <Button mode="contained">{datum}</Button>)} */}
    </List.Accordion>)}
  </List.AccordionGroup>
  
    <View style={styles.Editor}>
      <EditorPane />
      <FAB
    style={styles.fab}
    icon="play"
    onPress={() => console.log('Pressed')}
  />
    </View>
  </View>

export default withTheme(EditorScreen);