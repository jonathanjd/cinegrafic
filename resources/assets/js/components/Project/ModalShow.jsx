import React, { Component, Fragment } from 'react';
import {
    Modal,
    Button,
    ListGroupItem,
    Label,
    ListGroup
} from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModalShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            myShow,
            fncShowModalClose,
            myLoading,
            myProject,
            myUsersByProject
        } = this.props;

        const listUsers = myUsersByProject.map(user => {
            return (
                <ListGroupItem key={user.id}>
                    <FontAwesomeIcon
                        icon="check"
                        style={{ color: '#28a745' }}
                    />{' '}
                    {user.username}{' '}
                    <Label
                        bsStyle={
                            user.role === 'admin'
                                ? 'primary'
                                : user.role === 'editor'
                                    ? 'danger'
                                    : 'info'
                        }
                    >
                        {user.role.toUpperCase()}
                    </Label>
                </ListGroupItem>
            );
        });

        return (
            <Modal show={myShow} onHide={fncShowModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mostrar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {myLoading ? (
                        <ClipLoader
                            sizeUnit={'px'}
                            size={50}
                            color={'#337ab7'}
                        />
                    ) : (
                        <Fragment>
                            <p>
                                <strong>Codigo del Proyecto:</strong>{' '}
                                {myProject.cod}
                            </p>
                            <p>
                                <strong>Nombre del Proyecto:</strong>{' '}
                                {myProject.name}
                            </p>
                            <p>
                                <strong>Usuarios:</strong>
                            </p>
                            <ListGroup>{listUsers}</ListGroup>
                        </Fragment>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={fncShowModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalShow;
