import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProfView} from "./pages/ProfView";
import {StudentView} from "./pages/StudentView";
import {io} from "socket.io-client";

const App = () => {
    // TODO: Need to "lock" each user to their respective views
    const socket = io("localhost:3001");
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/prof"}>
                    <ProfView/>
                </Route>
                <Route path={"/student"}>
                    <StudentView/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
