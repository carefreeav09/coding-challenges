import React from 'react';
import {Route, Switch, withRouter} from 'react-router';

import {
    AsycnAppLayout,
    AsyncHome,
    AysncDepartureTimes,
    AsyncSAnFransiscoMovies
} from './AsycnComponents';

import PublicRoutes from '../../routes/PublicRoutes';

const App = () => (
        <Switch>
            <PublicRoutes exact path='/' layout={AsycnAppLayout} component={AsyncHome} />
            <PublicRoutes exact path='/departure-times' layout={AsycnAppLayout} component={AysncDepartureTimes} />
            <PublicRoutes exact path='/san-fransisco-movies' layout={AsycnAppLayout} component={AsyncSAnFransiscoMovies} />
        </Switch>
)

export default withRouter(App);