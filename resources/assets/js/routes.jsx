import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//containers
import App from './containers/App';
import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';
import UserPage from './containers/UserPage';

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
                    <Route component={Error404} />
                </Switch>
            </Router>
        </App>
    );
};

export default Routes;
