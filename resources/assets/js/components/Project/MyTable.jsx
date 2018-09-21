import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyTable = props => {
    const { myProjects } = props;
    const ListProjects = myProjects.map(project => {
        const { id, cod, name } = project;
        return (
            <tr key={id}>
                <td>{cod}</td>
                <td>{name.toUpperCase()}</td>
                <td className="text-center">
                    <button
                        type="button"
                        title="Mostrar Proyecto"
                        type="button"
                        className="btn btn-info"
                    >
                        <FontAwesomeIcon icon="eye" />
                    </button>{' '}
                    <button
                        type="button"
                        title="Editar Proyecto"
                        type="button"
                        className="btn btn-warning"
                    >
                        <FontAwesomeIcon icon="edit" />
                    </button>{' '}
                    <button
                        type="button"
                        title="Eliminar Proyecto"
                        type="button"
                        className="btn btn-danger"
                    >
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>{ListProjects}</tbody>
        </Table>
    );
};

export default MyTable;
