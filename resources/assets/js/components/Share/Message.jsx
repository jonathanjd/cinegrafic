import React from 'react';
import { Alert } from 'react-bootstrap';


const Message = (props) => {

    const { type, message} = props;

    return (
        <Alert bsStyle={type}>
            <strong>{ message }</strong>
        </Alert>
    );
};

export default Message;
