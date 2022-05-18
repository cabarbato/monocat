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
            marginVertical: 2,
            paddingVertical: 2,
            paddingHorizontal: 5,
            color: colors.white,
            backgroundColor: colors[props.color],
            borderRadius: roundness
        },
        ItemTitle: {
            color: colors.white,
            fill: colors.white
            },
        ItemContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            color: colors.white,
        }
    });

    return <>{
        menu_type !== "modal" ? <List.Accordion
            title={props.name}
            key={props.name}
            id={props.name}
            style={styles.Item}
            titleStyle={styles.ItemTitle}>
            <View style={styles.ItemContainer}>
                {menu_item_data[props.name].content.map((datum: string) => <DraggableChip key={datum} text={`<${datum}/>`} />)}
            </View>
        </List.Accordion> : <List.Item 
            right={d => <List.Icon {...d} icon={props.icon} style={styles.ItemTitle} />}
            title={props.name}
            style={styles.Item} />
   }</>
}

export default withTheme(EditorMenuItem)