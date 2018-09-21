import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModalShow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        const {
            fncFetchProjectDelete,
            fncShowMessage,
            fncChangeMessageAlert,
            fncFetchProjectList,
            myProject: { id },
            fncShowModalDeleteClose
        } = this.props;
        const message = {
            type: 'success',
            message: 'Proyecto Eliminado con Éxito'
        };
        fncFetchProjectDelete(id).then(() => {
            fncChangeMessageAlert(message);
            fncShowMessage();
            fncFetchProjectList();
            fncShowModalDeleteClose();
        });
    }

    render() {
        const { myShowDelete, fncShowModalDeleteClose, myProject } = this.props;

        return (
            <Modal show={myShowDelete} onHide={fncShowModalDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Deseas <strong>ELIMINAR</strong> el Proyecto{' '}
                        <strong>{myProject.name}</strong>?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.delete}>
                        <FontAwesomeIcon icon="trash" /> ELIMINAR
                    </Button>
                    <Button onClick={fncShowModalDeleteClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalShow;
