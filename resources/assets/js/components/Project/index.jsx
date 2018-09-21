import React, { Component, Fragment } from 'react';
import NavBar from '../Share/NavBar';
import MyMessage from '../Share/Message';
import { Grid, Col, Row, Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader } from 'react-spinners';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormCreate: false,
            showFormEdit: false,
            showAlertMessage: false
        };

        this.handleClickCreateProject = this.handleClickCreateProject.bind(
            this
        );
    }

    handleClickCreateProject() {
        const { showFormCreate } = this.state;
        let getValue = showFormCreate;
        getValue = !getValue;

        this.setState({
            showFormCreate: getValue
        });
    }

    render() {
        const { showAlertMessage } = this.state;
        const { myMessageType, myMessageMessage } = this.props;

        return (
            <Fragment>
                <NavBar />
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h3>
                                <FontAwesomeIcon icon="project-diagram" />{' '}
                                Proyectos
                            </h3>
                            <hr />
                        </Col>
                        <Col sm={12}>
                            {showAlertMessage ? (
                                <MyMessage
                                    type={myMessageType}
                                    message={myMessageMessage}
                                />
                            ) : null}
                            <button
                                onClick={this.handleClickCreateProject}
                                type="button"
                                className="btn btn-primary"
                                style={{ margin: 10 }}
                            >
                                <FontAwesomeIcon icon="user-plus" /> Crear
                                Proyecto
                            </button>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Project;