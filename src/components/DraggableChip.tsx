import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { PropsType, StyleType } from '../typings';

const DraggableChip = ({ text, sx }: { text: string, sx: PropsType }) => {
    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            Chip: {
                textAlign: 'center',
                margin: 2,
                backgroundColor: colors.accent,
            },
            ChipText: {
                color: colors.surface,
                fontFamily: 'Courier Prime Bold',
                textTransform: 'none'
            }
        });

    return <Chip 
    mode="flat" 
    style={styles.Chip} 
    textStyle={styles.ChipText}
    onTouchMove={e => { 
    console.log(e.currentTarget, e.touches)
    e.currentTarget.style.transform = `translate(${e.touches[0].screenX}px, ${e.touches[0].screenY}px)`
    }}>{text}</Chip>
}

export default DraggableChip;