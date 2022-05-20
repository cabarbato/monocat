import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, useTheme, withTheme } from 'react-native-paper';


const EditorPane = (props) => {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    Card: {
      backgroundColor: colors.surface,
      margin: 10,
      height: props.height - 150,
      borderRadius: 0
    },
    CardContent: {
      backgroundColor: colors.surface,
    }
  });

  return (
    <Card style={styles.Card}>
      <Card.Content style={styles.CardContent}>
        {props.content}
      </Card.Content>
    </Card>
  )
}

EditorPane.title = 'EditorPane';

export default withTheme(EditorPane);