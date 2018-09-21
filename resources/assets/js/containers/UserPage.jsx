//dependecias
import { connect } from 'react-redux';
import {
    fetchUserCreate,
    fetchUserUpdate,
    fetchUserList,
    getUserDataEdit,
    getUserDataEditRole,
    getUserDataEditStatus
} from '../actions/UserActions';

import { changeMessageAlert } from '../actions/MessageActions';

//component
import DashBoard from '../components/User';

export default connect(
    state => ({
        myLoading: state.user.loading,
        myUsers: state.user.users,
        myUser: state.user.user,
        myMessageType: state.message.type,
        myMessageMessage: state.message.message
    }),
    {
        fetchUserCreate,
        fetchUserUpdate,
        fetchUserList,
        getUserDataEdit,
        getUserDataEditRole,
        getUserDataEditStatus,
        changeMessageAlert
    }
)(DashBoard);
