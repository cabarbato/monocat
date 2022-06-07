import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import Svg from '../components/Svg';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';
import { windowHeight } from '../utils';

const images = require('../../assets/images/preview')

const mapStateToProps = state => ({
  content: state.editor.content
})

const PreviewScreen = (props: PropsType) => {
  const styles: StyleType = StyleSheet.create({
    Preview: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      display: 'flex',
      height: windowHeight,
    },
    Image: {
      opacity: 1,
      zIndex: 1,
      width: windowHeight / 6,
      height: windowHeight / 6,
      marginBottom: root_size,
      
    }
  });

  return (
    <View>
      <Surface style={styles.Preview}>
      {props.content.map(d => <Svg image={images[d]} key={d} />)}
      </Surface>
    </View>
  )
};

export default connect(mapStateToProps)(withTheme(PreviewScreen));
