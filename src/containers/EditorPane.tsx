import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, useTheme, withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { setDropZone } from '../features/editorSlice';
import { root_size } from '../styles/theme';
import { windowHeight } from '../utils/breakpoints';

const mapStateToProps = state => ({
  content: state.editor.content
}),
  mapDispatchToProps = dispatch => ({
    onSetDropzone: e => dispatch(setDropZone(e.nativeEvent.layout))
  })

const EditorPane = (props) => {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    Card: {
      backgroundColor: colors.surface,
      margin: root_size,
      borderRadius: 0,
      display: 'flex',
      alignItems: 'stretch',
      width: `calc(100% - ${root_size * 2}px)`
    },
    CardContent: {
      backgroundColor: colors.surface,
    }
  });

  return (
    <Card style={styles.Card}>
      <Card.Content style={styles.CardContent} onLayout={props.onSetDropzone}>
        {props.content}
      </Card.Content>
    </Card>
  )
}

EditorPane.title = 'EditorPane';

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(EditorPane));