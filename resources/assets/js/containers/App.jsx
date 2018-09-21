import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faCoffee,
    faUser,
    faClipboardList,
    faProjectDiagram,
    faCogs,
    faEdit,
    faUserPlus,
    faUsers,
    faCheck,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faUser,
    faClipboardList,
    faProjectDiagram,
    faCogs,
    faEdit,
    faUserPlus,
    faUsers,
    faCheck,
    faTrash
);

const App = props => {
    const { children } = props;
    return <main>{children}</main>;
};

export default App;
