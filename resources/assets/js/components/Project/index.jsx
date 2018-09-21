import React, { Component, Fragment } from 'react';
import NavBar from '../Share/NavBar';
import MyMessage from '../Share/Message';
import MyFormCreate from './FormCreate';
import MyTable from './MyTable';
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
        this.myCloseCreateProject = this.myCloseCreateProject.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    componentDidMount() {
        const { fetchUserList, fetchProjectList } = this.props;
        fetchUserList();
        fetchProjectList();
    }

    componentDidUpdate() {
        const { showAlertMessage } = this.state;
        if (showAlertMessage) {
            setTimeout(() => {
                this.setState({
                    showAlertMessage: false
                });
            }, 3000);
        }
    }

    handleClickCreateProject() {
        const { showFormCreate } = this.state;
        let getValue = showFormCreate;
        getValue = !getValue;

        this.setState({
            showFormCreate: getValue
        });
    }

    myCloseCreateProject() {
        this.setState({
            showFormCreate: false
        });
    }

    showMessage() {
        this.setState({
            showAlertMessage: true
        });
    }

    render() {
        const { showAlertMessage, showFormCreate } = this.state;
        const {
            myMessageType,
            myMessageMessage,
            myUsers,
            fetchProjectCreate,
            changeMessageAlert,
            myLoading,
            myProjects
        } = this.props;

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
                        {showFormCreate ? (
                            <MyFormCreate
                                myUsers={myUsers}
                                myFetchProjectCreate={fetchProjectCreate}
                                myCloseCreateProject={this.myCloseCreateProject}
                                myShowMessage={this.showMessage}
                                myChangeMessageAlert={changeMessageAlert}
                            />
                        ) : null}
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>
                                    {myLoading ? (
                                        <ClipLoader
                                            sizeUnit={'px'}
                                            size={50}
                                            color={'#337ab7'}
                                        />
                                    ) : (
                                        <MyTable myProjects={myProjects} />
                                    )}
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Project;
