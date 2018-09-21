//dependecias
import { connect } from 'react-redux';
import { changeMessageAlert } from '../actions/MessageActions';
import {
    fetchProjectCreate,
    fetchProjectList,
    fetchProjectShow,
    fetchProjectDelete,
    getProjectData
} from '../actions/ProjectAction';
import { fetchUserList } from '../actions/UserActions';
import { fetchPagination } from '../actions/PaginationAction';
//component
import Project from '../components/Project';

export default connect(
    state => ({
        myUsers: state.user.users,
        myMessageType: state.message.type,
        myMessageMessage: state.message.message,
        myLoading: state.project.loading,
        myProjects: state.project.projects,
        myPrevPageUrl: state.project.prev_page_url,
        myNextPageUrl: state.project.next_page_url,
        myProject: state.project.project,
        myUsersByProject: state.project.usersByProject
    }),
    {
        changeMessageAlert,
        fetchProjectCreate,
        fetchUserList,
        fetchProjectList,
        fetchPagination,
        fetchProjectShow,
        fetchProjectDelete,
        getProjectData
    }
)(Project);
