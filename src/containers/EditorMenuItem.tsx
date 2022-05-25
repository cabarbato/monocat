import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, useTheme, withTheme } from 'react-native-paper';
import DraggableChip from '../components/DraggableChip';
import menu_item_data from '../../assets/data/editor-menu-event.json';
import { StyleType } from '../typings';
import { colors, root_size } from '../styles/theme';
import { connect } from 'react-redux';
import { setActiveMenu, openModal } from '../features/editorSlice';



const mapStateToProps = state => ({
    active_menu: state.editor.active_menu
}),
    mapDispatchToProps = dispatch => ({
        onSetActive: d => dispatch(setActiveMenu(d)),
        onOpenModal: d => dispatch(openModal(d))
    })

const EditorMenuItem = props => {
    const { roundness } = useTheme(),
        menu_type: string = menu_item_data[props.name].type,
        is_active = props.active_menu === props.name

    const styles: StyleType = StyleSheet.create({
        Item: {
            marginVertical: 1,
            paddingVertical: 0,
            paddingHorizontal: root_size / 2,
            color: colors.white,
            backgroundColor: colors[props.color],
            borderRadius: roundness,
            display: (!props.active_menu || is_active )? 'flex' : 'none'
        },
        ItemTitle: {
            color: colors.white,
            fontFamily: 'Fredoka One',
            textTransform: 'uppercase'

        },
        ItemIcon: {
            color: colors.white,
            marginVertical: 0
        },
        ItemContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingLeft: 0,
        }
    });

    const handlePress = () => {
        console.log('pressed')
        menu_type === "modal" ? props.onOpenModal({}) : props.onSetActive(props.name)
    };

    return <>{
        menu_type !== "modal" ? <List.Accordion
                key={props.name}
                title={props.name}
                id={props.name}
                left={d => <List.Icon icon={props.icon} style={styles.ItemIcon} color={colors.white} />}
                right={d => <List.Icon icon={d.isExpanded ? "chevron-down" : "chevron-left"} style={styles.ItemIcon} color={colors.white} />}
                style={styles.Item}
                expanded={is_active}
                onPress={handlePress} // Doesn't seem to be working?
                // onLongPress={handlePress}
                titleStyle={styles.ItemTitle}>
                <View style={styles.ItemContainer}>
                    {menu_item_data[props.name].content.map((datum: string) => <DraggableChip key={datum} text={`<${datum}/>`} sx={styles.ItemTitle} />)}
                </View>
            </List.Accordion> : <List.Item
            left={d => <List.Icon {...d} icon={props.icon} style={styles.ItemTitle} color={colors.white} />}
            title={props.name}
            style={styles.Item}
            onPress={handlePress}
            titleStyle={styles.ItemTitle} />
    }</>
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(EditorMenuItem))