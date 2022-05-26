import { useRef, useState } from 'react';
import { PanResponder, Animated, Easing, StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { connect } from 'react-redux';
import { addElement } from '../features/editorSlice';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';


const mapStateToProps = state => ({
    dropZoneValues: state.editor.dropZoneValues,
}),
    mapDispatchToProps = dispatch => ({
        onAddElement: d => dispatch(addElement(d))
    })

const DraggableChip = (props) => {
    const [state, setState] = useState({
        showDraggable: true,
        pan: useRef(new Animated.ValueXY()).current
    })
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {
            dx: state.pan.x,
            dy: state.pan.y
        }],
            {
                //useNativeDriver: true, // Needs to be explicitly set
                // @ts-ignore
                listener: (event, gestureState) => console.log(event, gestureState)
            },
        ),
        onPanResponderRelease: (e, gesture) => {
            console.log(e)
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
    })

    function isDropZone(gesture) {
        var dz = props.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            View: {
                zIndex: props.zindex,
                elevation: props.zindex
            },
            Chip: {
                textAlign: 'center',
                margin: root_size / 5,
                backgroundColor: colors.accent,
            },
            ChipText: {
                color: colors.surface,
                fontFamily: 'Courier Prime Bold',
                textTransform: 'none'
            }
        });
        
    if (state.showDraggable) {
        return <Animated.View
            {...panResponder.panHandlers}
            style={[state.pan.getLayout(), styles.View]}>
            <Chip
                mode="flat"
                style={styles.Chip}
                textStyle={styles.ChipText}
            // @ts-ignore
            >{props.text}</Chip>
        </Animated.View>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DraggableChip);