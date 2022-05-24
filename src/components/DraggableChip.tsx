import { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { PropsType, StyleType } from '../typings';

const initial_state = {};

const DraggableChip = ({ text, sx }: { text: string, sx: PropsType }) => {
    const [state, setState] = useState(initial_state)
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: (e, gesture) => {
                // @ts-ignore
                const el: HTMLElement = e.currentTarget;
                el.style.transform = `translate(${gesture.moveX - el.offsetLeft}px, ${gesture.moveY - el.offsetTop}px)`
            },
            onPanResponderTerminationRequest: () => true,
            onShouldBlockNativeResponder: () => true 
        })
    ).current;
    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            Chip: {
                textAlign: 'center',
                margin: 2,
                backgroundColor: colors.accent,
                zIndex: 1000,
                elevation: 1000
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
        {...panResponder.panHandlers}
    >{text}</Chip>
}
export default DraggableChip;