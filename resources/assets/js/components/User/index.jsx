import React, { Component, Fragment } from 'react';
import NavBar from '../Share/NavBar';
import MyMessage from '../Share/Message';
import { Grid, Col, Row, Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyFormCreate from './FormCreate';
import MyFormEdit from './FormEdit';
import MyTable from './MyTable';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFormCreate: false,
            showFormEdit: false,
            showAlertMessage: false
        }
        this.handleClickCreateUser = this.handleClickCreateUser.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.myShowEditUser = this.myShowEditUser.bind(this);
        this.myCloseEditUser = this.myCloseEditUser.bind(this);
    }

    componentDidMount() {
        const { fetchUserList } = this.props;
        fetchUserList();
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

    showMessage(){
        this.setState({
            showAlertMessage: true
        });
    }

    handleClickCreateUser() {

        const { showFormCreate } = this.state;
        let getValue = showFormCreate;
        getValue = !getValue;

        this.setState({
            showFormCreate: getValue
        });
    }

    myShowEditUser() {
        this.setState({
            showFormEdit: true
        });
    }

    myCloseEditUser() {
        this.setState({
            showFormEdit: false
        });
    }

    render() {

        const { showFormCreate, showAlertMessage, showFormEdit } = this.state;
        const { fetchUserCreate, fetchUserUpdate, myUsers, fetchUserList, getUserDataEdit, myUser, changeMessageAlert, myMessageType, myMessageMessage, myLoading } = this.props;

        return (
            <Fragment>
                <NavBar />
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h3>Usuarios</h3>
                            <hr/>
                        </Col>
                        <Col sm={12}>
                            { showAlertMessage ? <MyMessage type={myMessageType} message={myMessageMessage} /> : null }
                            <button onClick={this.handleClickCreateUser} type="button" className="btn btn-primary" style={{ margin: 10 }}>
                                Crear Usuario
                                {" "}
                                <FontAwesomeIcon icon="user-plus" />
                            </button>
                        </Col>
                        { showFormCreate ? <MyFormCreate myFetchUserList={fetchUserList} myChangeMessageAlert={changeMessageAlert} myShowMessage={this.showMessage} myHandler={this.handleClickCreateUser} myFetchUserCreate={fetchUserCreate} /> : null }

                        { showFormEdit ? <MyFormEdit myShowMessage={this.showMessage} myChangeMessageAlert={changeMessageAlert} myFetchUserUpdate={fetchUserUpdate} myFetchUserList={fetchUserList} myUser={myUser} myCloseEditUser={this.myCloseEditUser} /> : null }

                        <Col sm={12}>
                        <Panel bsStyle="primary">
                            <Panel.Body>
                                { myLoading ? <ClipLoader sizeUnit={"px"} size={50} color={'#337ab7'} /> : <MyTable myUsers={myUsers} myShowEditUser={this.myShowEditUser} myGetUserDataEdit={getUserDataEdit} myShowFormEdit={showFormEdit} /> }
                            </Panel.Body>
                        </Panel>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

export default User;
