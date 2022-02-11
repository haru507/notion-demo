import React from 'react';
import {Route, Switch} from "react-router";
import { SignUp, SignIn } from "./templates";
// import Auth from "./Auth";

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            {/* <Route exact path="/signin/reset" component={Reset} /> */}
            <Route exact path="/signup" component={SignUp} />｀

            {/* <Auth> */}
                {/* <Route exact path="(/)?" component={ProductList} /> */}
            {/* </Auth> */}
        </Switch>
    );
};

export default Router;