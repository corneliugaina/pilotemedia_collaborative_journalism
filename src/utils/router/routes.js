import Presentation from '../../components/pages/Presentation'
import Financement from '../../components/pages/Financement'
import Reportages from '../../components/pages/Reportages'
import React from "react";
import { Route, Switch } from "react-router-dom";
import PageMsg from "../../components/pages/PageMsg";

// your components

const routes = (
    <Switch>
        <Route path={`/`} exact component={Reportages} />
        <Route path={`/presentation`} component={Presentation} />
        <Route path={`/financement`} component={Financement} />
        <Route path={`/pagemsg`} component={PageMsg} />
    </Switch>
);

export default routes;
