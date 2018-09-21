//dependecias
import { connect } from 'react-redux';
import { changeMessageAlert } from '../actions/MessageActions';
import { fetchProjectCreate } from '../actions/ProjectAction';
import { fetchUserList } from '../actions/UserActions';
//component
import Project from '../components/Project';

export default connect(
    state => ({
        myUsers: state.user.users,
        myMessageType: state.message.type,
        myMessageMessage: state.message.message
    }),
    { changeMessageAlert, fetchProjectCreate, fetchUserList }
)(Project);
