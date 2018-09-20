import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyTable = (props) => {


    const handleOnClick = (id, role, status) => {
        const { myShowEditUser, myGetUserDataEdit } = props;
        const data = {
            id,
            role,
            status
        };
        myGetUserDataEdit(data);
        myShowEditUser();
    }

    const { myUsers, myShowFormEdit } = props;
    const ListUser = myUsers.map(user => {
        const { id, username, role, status } = user;
        return (
            <tr key={id}>
                <td>{ id }</td>
                <td>{ username }</td>
                <td>{ role.toUpperCase() }</td>
                <td>{ status.toUpperCase() }</td>
                <td className="text-center">
                <button title="Editar Usuario" type="button" className="btn btn-defult" onClick={() => handleOnClick(id, role, status)} disabled={ myShowFormEdit ? true : false }>
                    <FontAwesomeIcon icon="edit" />
                </button>

                </td>
            </tr>
        );
    });

    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Tipo Usuario</th>
                    <th>Estatus</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                { ListUser }
            </tbody>
        </Table>
    );
};

export default MyTable;
