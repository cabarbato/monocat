import React, { useRef, useState } from 'react';
import { PanResponder, Animated, StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { connect } from 'react-redux';
import { addElement } from '../features/editorSlice';
import { root_size } from '../styles/theme';
import { PropsType, StyleType } from '../typings';
import { between, windowHeight } from '../utils';


const mapStateToProps = state => ({
    dropZoneValues: state.editor.dropZoneValues,
}),
    mapDispatchToProps = dispatch => ({
        onAddElement: d => dispatch(addElement(d))
    })

const DraggableChip = (props) => {
    let [is_draggable, setDraggable] = useState(true);
    const pan = useRef(new Animated.ValueXY()).current,
        isDropZone = (gesture) => {
            const { left, top, width } = props.dropZoneValues,
                is_in_x = between(gesture.moveX, [left, left + width]),
                is_in_y = between(gesture.moveY, [top, windowHeight]);

            return is_in_x && is_in_y;
        },
        panResponder = useRef(PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                {
                    useNativeDriver: false, // Needs to be explicitly set
                    // @ts-ignore
                    // listener: (event, gestureState) => console.log(event, gestureState)
                },
            ),
            onPanResponderRelease: (e, gesture) => {
                if (isDropZone(gesture)) {
                    const text = e.currentTarget.textContent
                    props.onAddElement(text)
                    setDraggable(false);
                }
                else {
                    Animated.spring(
                        pan,
                        // @ts-ignore
                        { toValue: { x: 0, y: 0 }, useNativeDriver: false }
                    ).start();
                }
            }
        }
        )).current;

    const { colors } = useTheme(),
        styles: StyleType = StyleSheet.create({
            View: {
                zIndex: props.zindex,
                elevation: props.zindex,
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

    if (is_draggable) {
        return <Animated.View
            {...panResponder.panHandlers}
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}>
            <Chip
                mode="flat"
                style={styles.Chip}
                textStyle={styles.ChipText}
            // @ts-ignore
            >{props.text}</Chip>
        </Animated.View>
    }
    else return <></>
}
export default connect(mapStateToProps, mapDispatchToProps)(DraggableChip);