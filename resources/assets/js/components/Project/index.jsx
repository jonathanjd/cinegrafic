import React, { Component, Fragment } from 'react';
import NavBar from '../Share/NavBar';
import MyMessage from '../Share/Message';
import MyFormCreate from './FormCreate';
import MyTable from './MyTable';
import ModalShow from './ModalShow';
import ModalDelete from './ModalDelete';
import Pagination from '../Share/Pagination';
import { Grid, Col, Row, Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader } from 'react-spinners';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormCreate: false,
            showFormEdit: false,
            showAlertMessage: false,
            show: false,
            showDelete: false
        };

        this.handleClickCreateProject = this.handleClickCreateProject.bind(
            this
        );
        this.myCloseCreateProject = this.myCloseCreateProject.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.showModalOpen = this.showModalOpen.bind(this);
        this.showModalClose = this.showModalClose.bind(this);
        this.showModalDeleteOpen = this.showModalDeleteOpen.bind(this);
        this.showModalDeleteClose = this.showModalDeleteClose.bind(this);
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

    showModalOpen(id) {
        const { fetchProjectShow } = this.props;
        this.setState({
            show: true
        });
        fetchProjectShow(id);
    }

    showModalClose() {
        this.setState({
            show: false
        });
    }

    showModalDeleteOpen(data) {
        const { getProjectData } = this.props;
        this.setState({
            showDelete: true
        });
        getProjectData(data);
    }

    showModalDeleteClose() {
        this.setState({
            showDelete: false
        });
    }

    render() {
        const {
            showAlertMessage,
            showFormCreate,
            show,
            showDelete
        } = this.state;
        const {
            myMessageType,
            myMessageMessage,
            myUsers,
            fetchProjectCreate,
            changeMessageAlert,
            myLoading,
            myProjects,
            myPrevPageUrl,
            myNextPageUrl,
            fetchPagination,
            myProject,
            myUsersByProject,
            fetchProjectList,
            fetchProjectDelete
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
                                myFetchProjectList={fetchProjectList}
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
                                        <Fragment>
                                            <MyTable
                                                myProjects={myProjects}
                                                fncShowModalOpen={
                                                    this.showModalOpen
                                                }
                                                fncShowModalDeleteOpen={
                                                    this.showModalDeleteOpen
                                                }
                                            />
                                            <Pagination
                                                myPrevPageUrl={myPrevPageUrl}
                                                myNextPageUrl={myNextPageUrl}
                                                myFetchPagination={
                                                    fetchPagination
                                                }
                                            />
                                        </Fragment>
                                    )}
                                </Panel.Body>
                            </Panel>
                            {/* My Modal Show Project */}
                            <ModalShow
                                myShow={show}
                                fncShowModalClose={this.showModalClose}
                                myLoading={myLoading}
                                myProject={myProject}
                                myUsersByProject={myUsersByProject}
                            />
                            {/* My Modal Delete Project */}
                            <ModalDelete
                                myShowDelete={showDelete}
                                myProject={myProject}
                                fncShowModalDeleteClose={
                                    this.showModalDeleteClose
                                }
                                fncFetchProjectDelete={fetchProjectDelete}
                                fncFetchProjectList={fetchProjectList}
                                fncShowMessage={this.showMessage}
                                fncChangeMessageAlert={changeMessageAlert}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default Project;
