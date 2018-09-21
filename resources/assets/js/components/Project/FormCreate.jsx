import React, { Component } from 'react';
import {
    Col,
    FormGroup,
    Button,
    Well,
    ControlLabel,
    ListGroup,
    ListGroupItem,
    Label,
    Alert
} from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showValidate: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.addUser = this.addUser.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onSubmit(values) {
        const { users } = this.state;
        const {
            myFetchProjectCreate,
            reset,
            myCloseCreateProject,
            myShowMessage,
            myChangeMessageAlert
        } = this.props;
        const data = {};
        data.cod = values.cod;
        data.name = values.name;
        data.users = users;
        const message = {
            type: 'success',
            message: 'Proyecto creado con Éxito'
        };

        if (users.length > 0) {
            myFetchProjectCreate(data).then(() => {
                myChangeMessageAlert(message);
                myShowMessage();
                reset();
                myCloseCreateProject();
            });
        } else {
            this.setState({
                showValidate: true
            });
        }
    }

    checkItem(value) {
        return this.state.users.some(item => value === item[0]);
    }

    removeItem(user) {
        const array = [...this.state.users];
        const index = array.indexOf(user);
        array.splice(index, 1);
        this.setState({ users: array });
    }

    addUser(user) {
        const { users } = this.state;
        if (!this.checkItem(user[0])) {
            this.setState({
                users: [...users, user]
            });
        }
    }

    validateUser(Alert) {
        return (
            <Alert bsStyle="danger">
                <strong>Ops!</strong> Debes seleccionar usuario para el
                proyecto.
            </Alert>
        );
    }

    renderError(field) {
        const {
            meta: { submitFailed, error }
        } = field;
        if (submitFailed && error) {
            return (
                <Alert bsStyle="danger">
                    <strong>Ops!</strong> {error}
                </Alert>
            );
        }
        return null;
    }

    render() {
        const { handleSubmit, submitting, myUsers } = this.props;
        const { users, showValidate } = this.state;

        const getUser = users.map(user => {
            return (
                <ListGroupItem key={user[0]}>
                    <FontAwesomeIcon
                        icon="check"
                        style={{ color: '#28a745' }}
                    />{' '}
                    {user[1]}{' '}
                    <Label
                        bsStyle={
                            user[2] === 'admin'
                                ? 'primary'
                                : user[2] === 'editor'
                                    ? 'danger'
                                    : 'info'
                        }
                    >
                        {user[2].toUpperCase()}
                    </Label>
                    <button
                        type="button"
                        className="btn btn-danger btn-xs pull-right"
                        onClick={() => this.removeItem(user)}
                    >
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </ListGroupItem>
            );
        });

        const listUsers = myUsers.map(user => {
            return (
                <Button
                    type="button"
                    bsStyle="default"
                    key={user.id}
                    style={{ margin: 2 }}
                    onClick={() =>
                        this.addUser([user.id, user.username, user.role])
                    }
                >
                    <FontAwesomeIcon icon="user" /> {user.username}{' '}
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
                </Button>
            );
        });

        return (
            <Col sm={6}>
                <Well>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <FormGroup>
                            <Field
                                name="cod"
                                type="text"
                                component="input"
                                id="cod"
                                placeholder="Codigo del Proyecto"
                                className="form-control"
                            />
                        </FormGroup>
                        <Field name="cod" component={this.renderError} />
                        <FormGroup>
                            <Field
                                name="name"
                                type="text"
                                component="input"
                                id="name"
                                placeholder="Nombre del Proyecto"
                                className="form-control"
                            />
                        </FormGroup>
                        <Field name="name" component={this.renderError} />
                        <FormGroup>
                            <ControlLabel>Usuarios</ControlLabel>
                            <br />
                            {listUsers}
                        </FormGroup>
                        {users.length < 1 && showValidate
                            ? this.validateUser(Alert)
                            : null}
                        {users.length > 0 ? (
                            <ListGroup>
                                <p>
                                    <strong>Usuarios Seleccionado</strong>
                                </p>
                                {getUser}
                            </ListGroup>
                        ) : null}
                        <Button
                            type="submit"
                            bsStyle="primary"
                            disabled={submitting}
                        >
                            Crear Proyecto
                        </Button>{' '}
                        <Button type="button" bsStyle="default">
                            Cancelar
                        </Button>
                    </form>
                </Well>
            </Col>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.cod) {
        errors.cod = 'El Campo Codigo del Proyecto es Requerido';
    }

    if (!values.name) {
        errors.name = 'El Campo Nombre del Proyecto es Requerido';
    }

    if (values.cod) {
        if (values.cod.length < 2 || values.cod.length > 24) {
            errors.cod =
                'El Campo Codigo del Proyecto debe tener entre 3 y 24 caracteres';
        }
    }
    if (values.name) {
        if (values.name.length < 2 || values.name.length > 24) {
            errors.name =
                'El Campo Codigo del Proyecto debe tener entre 3 y 24 caracteres';
        }
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'createProject'
})(FormCreate);
