import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import AllPatients from "./Components/AllPatients/AllPatients";
import Appoinment from "./Components/Appoinment/Appointment/Appoinment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment" component={Appoinment} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/addDoctor" component={AddDoctor} />
          <PrivateRoute path="/allPatients" component={AllPatients} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/appointment" component={Dashboard} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
