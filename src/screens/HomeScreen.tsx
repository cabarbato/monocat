import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/* TODO: 
  1. Eventually convert buttons to create new/open existing projects
  2. Save files locally or authenticate and associate projects in a db?
*/

const EditorScreen = ({navigation}) => <View>
  <Text>monocat</Text>
  <Text>code editor</Text>
  
  <Button title="Edit Project" onPress={() => navigation.navigate("Editor")}/>
  <Button title="Preview Project" onPress={() => navigation.navigate("Preview")} />
</View>

const styles = StyleSheet.create({})

export default EditorScreen;