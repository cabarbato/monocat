import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { StyleType } from '../typings';


const EditorModal = props => {
    const styles: StyleType = StyleSheet.create({
        Modal: {
            backgroundColor: 'white',
            padding: 20
        }
    });
    
    return <Portal>
        <Modal
            visible={props.visible}
            onDismiss={() => props.setVisible(false)}
            contentContainerStyle={styles.Modal}>
            <Text>{props.text}</Text>
        </Modal>
    </Portal>
}

export default EditorModal