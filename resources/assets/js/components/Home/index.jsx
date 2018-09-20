import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { reduxForm, Field } from 'redux-form';
import { Grid, Row, Col, Panel, FormGroup, Button, Alert } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(values) {
        console.log(values);
        const { history: { push } } = this.props;
        push('/admin/dashboard');
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
        const { handleSubmit, submitting, pristine} = this.props;

        return (
           <Grid>
               <Row>
                   <Col sm={6} md={6} mdOffset={3} smOffset={3}>
                   <Panel bsStyle="primary" style={{ marginTop: 50 }}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h1" className="text-center text-uppercase">
                            <FontAwesomeIcon icon="user" size="4x" style={{ margin: 20 }} />
                        </Panel.Title>
                        <Panel.Title componentClass="h1" className="text-center text-uppercase">Inicar Sesión</Panel.Title>
                    </Panel.Heading>
                        <Panel.Body>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                            <FormGroup>
                            <Field name="project" component="select" className="form-control" placeholder="seleccione">
                                <option value="select">Seleccionar Proyecto</option>
                                <option value="proyect1">Proyecto Uno</option>
                                <option value="proyect2">Proyecto Dos</option>
                                <option value="Admin">Admin</option>
                            </Field>
                            </FormGroup>
                            <Field name="project" component={this.renderError} />
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
                            <Button type="submit" bsStyle="primary" block disabled={pristine || submitting}>Entrar</Button>
                            </form>
                        </Panel.Body>
                    </Panel>
                   </Col>
               </Row>
           </Grid>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'El Campo Contraseña es Requerido'
    }

    if (!values.project) {
        errors.project = 'El Campo Proyecto es Requerido'
    }

    if (values.project === 'select') {
        errors.project = 'El Campo Proyecto es Requerido'
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'login'
})(Home);
