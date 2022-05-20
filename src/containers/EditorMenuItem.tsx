import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, useTheme, withTheme } from 'react-native-paper';
import DraggableChip from '../components/DraggableChip';
import menu_item_data from '../../assets/data/editor-menu-event.json';
import { StyleType } from '../typings';
import { colors } from '../styles/theme';



const EditorMenuItem = props => {
    const { roundness } = useTheme(),
        menu_type: string = menu_item_data[props.name].type

    const styles: StyleType = StyleSheet.create({
        Item: {
            marginVertical: 1,
            paddingVertical: 0,
            paddingHorizontal: 5,
            color: colors.white,
            backgroundColor: colors[props.color],
            borderRadius: roundness
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

    return <>{
        menu_type !== "modal" ? <List.Accordion
            title={props.name}
            key={props.name}
            id={props.name}
            left={d => <List.Icon icon={props.icon} style={styles.ItemIcon} color={colors.white} />}
            right={d => <List.Icon icon={d.isExpanded ? "chevron-down" : "chevron-left"} style={styles.ItemIcon} color={colors.white} />}
            style={styles.Item}
            titleStyle={styles.ItemTitle}>
            <View style={styles.ItemContainer}>
                {menu_item_data[props.name].content.map((datum: string) => <DraggableChip key={datum} text={`<${datum}/>`} sx={styles.ItemTitle} />)}
            </View>
        </List.Accordion> : <List.Item
            left={d => <List.Icon {...d} icon={props.icon} style={styles.ItemTitle} color={colors.white} />}
            title={props.name}
            style={styles.Item}
            titleStyle={styles.ItemTitle} />
    }</>
}

export default withTheme(EditorMenuItem)