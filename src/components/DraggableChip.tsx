import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { StyleType } from '../typings';

const DraggableChip = ({ text }: { text: string }) => {
    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            Chip: {
                textAlign: 'center',
                margin: 2,
                color: colors.background,
                backgroundColor: colors.accent
            }
        });

    return <Chip mode="flat" key={text} style={styles.Chip} >{text}</Chip>
}

export default DraggableChip;