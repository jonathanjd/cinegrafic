import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//containers
import App from './containers/App';
import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import UserPage from './containers/UserPage';
import ProjectPage from './containers/ProjectPage';

//components
import Error404 from './components/404';

const Routes = () => {
    return (
        <App>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/admin/dashboard" component={DashboardPage} />
                    <Route exact path="/admin/usuario" component={UserPage} />
                    <Route exact path="/admin/proyecto" component={ProjectPage} />
                    <Route component={Error404} />
                </Switch>
            </Router>
        </App>
    );
};

export default Routes;
