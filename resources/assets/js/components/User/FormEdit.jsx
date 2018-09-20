import React, { Component } from 'react';
import { Col, FormGroup, Button, Well, Alert } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

class FormEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formEdit: {
                id: '',
                role: '',
                status: '',
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangestatus = this.handleChangestatus.bind(this);
    }

    componentDidMount() {
        const { myUser } = this.props;
        let formEdit = Object.assign({}, this.state);
        formEdit.formEdit.id = myUser.id;
        formEdit.formEdit.role = myUser.role;
        formEdit.formEdit.status = myUser.status;
        this.setState(formEdit);
    }

    onSubmit(values) {

        const { myChangeMessageAlert, myShowMessage, myCloseEditUser } = this.props;
        const message = {
            type: 'success',
            message: 'Usuario Actualizado con Éxito'
        }

        if (values.password) {
            let formEdit = Object.assign({}, this.state);
            formEdit.formEdit.password = values.password;
            this.setState(formEdit);
            const { myFetchUserUpdate, myFetchUserList } = this.props;
            myFetchUserUpdate(this.state.formEdit).then( ()=> {
                myFetchUserList();
                myChangeMessageAlert(message);
                myShowMessage();
                myCloseEditUser();
            });
        } else {
            const { myFetchUserUpdate, myFetchUserList } = this.props;
            myFetchUserUpdate(this.state.formEdit).then( ()=> {
                myFetchUserList();
                myChangeMessageAlert(message);
                myShowMessage();
                myCloseEditUser();
            });
        }
    }

    handleChangeRole(e) {
        let formEdit = Object.assign({}, this.state);
        formEdit.formEdit.role = e.target.value;
        this.setState(formEdit);
    }

    handleChangestatus(e) {
        let formEdit = Object.assign({}, this.state);
        formEdit.formEdit.status = e.target.value;
        this.setState(formEdit);
    }

    renderError(field) {
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

    render() {
        const { handleSubmit, myCloseEditUser } = this.props;
        const { role, status } = this.state.formEdit;
        return (
            <Col sm={6}>
                <Well>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <FormGroup>
                            <select value={role} name="role" className="form-control" onChange={this.handleChangeRole}>
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="reader">Lector</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <select name="status" className="form-control" onChange={this.handleChangestatus} value={status}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </FormGroup>
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
                        <Field name="password" component={this.renderError} />
                        <Button type="submit" bsStyle="warning">Editar Usuario</Button>
                        {" "}
                        <Button type="button" bsStyle="default" onClick={ myCloseEditUser }>Cancelar</Button>
                    </form>
                </Well>
            </Col>
        );
    }


}


const validate = values => {
    const errors = {};

    if (values.password) {
        if (values.password.length < 6 || values.password.length > 24) {
            errors.password = 'El Campo Contraseña debe tener entre 6 y 24 caracteres'
        }
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'editUser',
})(FormEdit);
