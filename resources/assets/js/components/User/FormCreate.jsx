import React from 'react';
import { Col, FormGroup, Button, Well, Alert } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

const FormCreate = (props) => {


    const onSubmit = (values) => {
        const { myFetchUserCreate, myShowMessage, reset, myFetchUserList, myChangeMessageAlert } = props;
        const message = {
            type: 'success',
            message: 'Usuario creado con Éxito'
        }
        myFetchUserCreate(values).then( () => {
            myChangeMessageAlert(message);
            myShowMessage();
            reset();
            myFetchUserList();
        });
    }

    const handleClickClose = () => {
        const { myHandler } = props;
        myHandler();
    }

    const renderError = (field) => {
        const { meta: { submitFailed, error } } = field;
        if (submitFailed && error) {
            return (
                <Alert bsStyle="danger">
                    <strong>Ops!</strong> { error }
                </Alert>
            );
        }
        return null;
    }

    const { handleSubmit, submitting, pristine } = props;

    return (
        <Col sm={6}>
            <Well>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Field name="role" component="select" className="form-control" placeholder="seleccione">
                            <option value="select">Seleccionar Tipo de Usuario</option>
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="reader">Lector</option>
                        </Field>
                    </FormGroup>
                    <Field name="role" component={renderError} />
                    <FormGroup>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            id="password"
                            placeholder="Contraseña"
                            className="form-control"
                        />
                    </FormGroup>
                    <Field name="password" component={renderError} />
                    <Button type="submit" bsStyle="primary" disabled={ pristine || submitting}>Crear Usuario</Button>
                    {" "}
                    <Button type="button" bsStyle="default" onClick={handleClickClose}>Cancelar</Button>
                </form>
            </Well>
        </Col>
    );
};

const validate = values => {
    const errors = {};
    if (!values.role) {
        errors.role = 'El Campo Tipo de Usuario es Requerido'
    }

    if (values.role === 'select') {
        errors.role = 'El Campo Tipo de Usuario es Requerido'
    }

    if (!values.password) {
        errors.password = 'El Campo Contraseña es Requerido'
    }

    if (values.password) {
        if (values.password.length < 6 || values.password.length > 24) {
            errors.password = 'El Campo Contraseña debe tener entre 6 y 24 caracteres'
        }
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'createUser',
})(FormCreate);
