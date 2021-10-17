import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ProfView } from "./pages/ProfView/ProfView";
import { StudentView } from "./pages/StudentView/StudentView";
import { JoinRoomView } from "./pages/JoinRoomView";
import Cookies from "universal-cookie";

const App = () => {
  // TODO: Need to "lock" each user to their respective views
  const cookie = new Cookies();
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/prof"}>
          <ProfView />
        </Route>
        <Route path={"/student"}
           render={() => {return (cookie.get("roomCode") !== undefined ? <StudentView /> : <Redirect from={"*"} to={"/"} />)}}>
        </Route>
        <Route path={"/"}
           render={() => {return (cookie.get("roomCode") === undefined ? <JoinRoomView/> : <Redirect from={"*"} to={"/student"} />)}}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
