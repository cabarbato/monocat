import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Chip, useTheme } from 'react-native-paper';

const Drag = () => {
    return <>
        <List.Section title="Images">
          <View style={styles.row}>
            <Chip
              mode="outlined"
              selected
              onPress={() => {}}
              style={styles.chip}
            >
              Cat
            </Chip>
          </View>
        </List.Section>
        <List.Section title="Text">
          <View style={styles.row}>
            <Chip
              mode="outlined"
              onPress={() => {}}
              style={styles.chip}
            >
              Robots Activate
            </Chip>
          </View>
        </List.Section>
    </>
}

Drag.title = 'Drag';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
  tiny: {
    marginVertical: 2,
    marginRight: 2,
    marginLeft: 2,
    minHeight: 19,
    lineHeight: 19,
  },
});

export default Drag;