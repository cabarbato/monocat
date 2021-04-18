import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { withTheme } from 'react-native-paper';
import EditorPane from '../components/editor/EditorPane';
import menu_items from '../../assets/data/editor-menu.json'

/* TODO: 
  1. Left nav bar - File, Search, Debug/Preview only for now
  2. Drag and Drop UX - maybe a limited number of chips to use for now?
  3. Probably also a settings modal
*/

const EditorScreen = () => <View style={styles.Content}>
    <FlatList
      keyExtractor={el => el.name}
      data={menu_items}
      renderItem={({ item }) => <Button style={styles.MenuListItem} title={item.name} />}
    />
    <View style={styles.Editor}>
      <EditorPane />
    </View>
  </View>

const styles = StyleSheet.create({
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
  }
});

export default withTheme(EditorScreen);