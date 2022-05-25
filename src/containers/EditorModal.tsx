import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { StyleType } from '../typings';
import { closeModal } from '../features/editorSlice';
import { connect } from 'react-redux';
import { root_size } from '../styles/theme';


const mapStateToProps = state => ({
    modal: state.editor.modal
}),
    mapDispatchToProps = dispatch => ({
    onCloseModal: () => dispatch(closeModal())
    })

const EditorModal = ({ modal, onCloseModal }) => {
    const styles: StyleType = StyleSheet.create({
        Modal: {
            backgroundColor: 'white',
            padding: root_size * 2
        }
    });

    return <Portal>
        <Modal
            visible={modal.open}
            onDismiss={onCloseModal}
            contentContainerStyle={styles.Modal}>
            <Text>{modal.content}</Text>
        </Modal>
    </Portal>
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorModal)