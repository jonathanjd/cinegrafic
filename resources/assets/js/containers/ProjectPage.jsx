//dependecias
import { connect } from 'react-redux';
import { changeMessageAlert } from '../actions/MessageActions';
import { fetchProjectCreate, fetchProjectList } from '../actions/ProjectAction';
import { fetchUserList } from '../actions/UserActions';
//component
import Project from '../components/Project';

export default connect(
    state => ({
        myUsers: state.user.users,
        myMessageType: state.message.type,
        myMessageMessage: state.message.message,
        myLoading: state.project.loading,
        myProjects: state.project.projects
    }),
    { changeMessageAlert, fetchProjectCreate, fetchUserList, fetchProjectList }
)(Project);
