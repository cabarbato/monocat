import { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { connect } from 'react-redux';
import { addElement } from '../features/editorSlice';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';

const initial_state = {
    showDraggable: true,
    pan: new Animated.ValueXY()
};

const mapStateToProps = state => ({
    dropZoneValues: state.editor.dropZoneValues,
}),
    mapDispatchToProps = dispatch => ({
    onAddElement: d => dispatch(addElement(d))
    })

const DraggableChip = (props) => {
    const [state, setState] = useState(initial_state)
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: state.pan.x,
                dy: state.pan.y
            }]),
            onPanResponderRelease: (e, gesture) => {
                if (isDropZone(gesture)) {
                    setState({
                        ...state,
                        showDraggable: false
                    });
                } else {
                    Animated.spring(
                        state.pan,
                        // @ts-ignore
                        { toValue: { x: 0, y: 0 } }
                    ).start();
                }
            }
        }/* {
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: (e, gesture) => {
                // @ts-ignore
                const el: HTMLElement = e.currentTarget;
                console.log(e, gesture.dx, gesture)
                gesture.dx = 
                // el.style.transform = `translate(${gesture.moveX - gesture.x0}px, ${gesture.moveY - gesture.y0}px)`
            },
            onPanResponderTerminationRequest: () => true,
            onShouldBlockNativeResponder: () => true 
        } */))

    function isDropZone(gesture) {
        var dz = props.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            Chip: {
                textAlign: 'center',
                margin: root_size / 5,
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

    if (state.showDraggable) {
        return <Animated.View>
            <Chip
                mode="flat"
                style={styles.Chip}
                textStyle={styles.ChipText}
                // @ts-ignore
                {...panResponder.panHandlers}
            >{props.text}</Chip>
        </Animated.View>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DraggableChip);