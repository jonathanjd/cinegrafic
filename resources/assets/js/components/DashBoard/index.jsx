import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Share/NavBar';
import { Grid, Col, Row, Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DashBoard extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>
                                    <Row>
                                        <Col sm={6}>
                                            <Panel bsStyle="primary">
                                                <Panel.Heading>
                                                    <Panel.Title componentClass="h3" className="text-center">
                                                        <FontAwesomeIcon icon="clipboard-list" size="4x" style={{ margin: 20 }} />
                                                    </Panel.Title>
                                                    <Panel.Title componentClass="h3" className="text-center">Registros</Panel.Title>
                                                </Panel.Heading>
                                                <Panel.Body>
                                                    <a href="#" className="btn btn-success btn-block">Entrar</a>
                                                </Panel.Body>
                                            </Panel>
                                        </Col>
                                        <Col sm={6}>
                                            <Panel bsStyle="primary">
                                                <Panel.Heading>
                                                    <Panel.Title componentClass="h3" className="text-center">
                                                        <FontAwesomeIcon icon="project-diagram" size="4x" style={{ margin: 20 }} />
                                                    </Panel.Title>
                                                    <Panel.Title componentClass="h3" className="text-center">Proyectos</Panel.Title>
                                                </Panel.Heading>
                                                <Panel.Body>
                                                    <a href="#" className="btn btn-success btn-block">Entrar</a>
                                                </Panel.Body>
                                            </Panel>
                                        </Col>
                                        <Col sm={6}>
                                            <Panel bsStyle="primary">
                                                <Panel.Heading>
                                                    <Panel.Title componentClass="h3" className="text-center">
                                                        <FontAwesomeIcon icon="user" size="4x" style={{ margin: 20 }} />
                                                    </Panel.Title>
                                                    <Panel.Title componentClass="h3" className="text-center">Usuarios</Panel.Title>
                                                </Panel.Heading>
                                                <Panel.Body>
                                                    <Link to="/admin/usuario" className="btn btn-success btn-block">Entrar</Link>
                                                </Panel.Body>
                                            </Panel>
                                        </Col>
                                        <Col sm={6}>
                                            <Panel bsStyle="primary">
                                                <Panel.Heading>
                                                    <Panel.Title componentClass="h3" className="text-center">
                                                        <FontAwesomeIcon icon="cogs" size="4x" style={{ margin: 20 }} />
                                                    </Panel.Title>
                                                    <Panel.Title componentClass="h3" className="text-center">Opciones</Panel.Title>
                                                </Panel.Heading>
                                                <Panel.Body>
                                                    <a href="#" className="btn btn-success btn-block">Entrar</a>
                                                </Panel.Body>
                                            </Panel>
                                        </Col>
                                    </Row>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default DashBoard;
