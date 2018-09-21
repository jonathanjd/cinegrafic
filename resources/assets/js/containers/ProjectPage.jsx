//dependecias
import { connect } from 'react-redux';
import { changeMessageAlert } from '../actions/MessageActions';
//component
import Project from '../components/Project';

export default connect((state) => ({
    myMessageType: state.message.type,
    myMessageMessage: state.message.message,
}),
    { changeMessageAlert })
    (Project);
