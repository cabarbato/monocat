import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, List, useTheme, withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { setDropZone } from '../features/editorSlice';
import { root_size, primary } from '../styles/theme';
import { jsxSyntax } from '../utils';

const mapStateToProps = state => ({
  content: state.editor.content
}),
  mapDispatchToProps = dispatch => ({
    onSetDropzone: e => dispatch(setDropZone(e.nativeEvent.layout))
  })

const EditorPane = (props) => {
  const { colors } = useTheme(),
  primary_arr = Object.values(primary)

  const styles = StyleSheet.create({
    Card: {
      backgroundColor: colors.surface,
      margin: root_size,
      borderRadius: 0,
      display: 'flex',
      alignItems: 'stretch',
      width: props.width - (root_size * 6)
    },
    CardContent: {
      backgroundColor: colors.surface,
      fontFamily: 'Courier Prime Bold',
      fontSize: '1.5rem'
    }
  });
  
  return (
    <Card style={styles.Card}>
      <Card.Content style={styles.CardContent} onLayout={props.onSetDropzone}>
        {props.content.length ? props.content.map((d,i) => (<List.Item key={d} title={jsxSyntax(d)} titleStyle={{color: primary_arr[i]}} />)) : null}
      </Card.Content>
    </Card>
  )
}

EditorPane.title = 'EditorPane';

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(EditorPane));