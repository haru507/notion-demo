import React from 'react';
import {Route, Switch} from "react-router";
import { SignUp, SignIn, CalendarTasks, TasksList } from "./templates";
// import Auth from "./Auth";

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/signIn" component={SignIn} />
            {/* <Route exact path="/signin/reset" component={Reset} /> */}
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/task" component={TasksList} />
            <Route exact path="/calendar" component={CalendarTasks} />

            {/* <Auth> */}
                {/* <Route exact path="(/)?" component={ProductList} /> */}
            {/* </Auth> */}
        </Switch>
    );
};

export default Router;