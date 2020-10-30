import React from 'react';
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Article from "../Pages/Article";
import Admins from "../Pages/Admins";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes () {

    return(
    <Router>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login} />
            <Route path="/article" exact component={Article} />
            <Route path="/admins" exact component={Admins} />

        </Switch>
    </Router>
    );
}
export default Routes;
