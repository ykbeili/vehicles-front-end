import React from "react";
import "./App.css";
import VehicleList from "./vehicles/VehicleList"
import AddVehicle from "./vehicles/AddVehicle"
import EditVehicle from "./vehicles/EditVehicle"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
function App() { 
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <VehicleList/>
        </Route>
        <Route path="/add-vehicle">
          <AddVehicle/>
        </Route>
        <Route path="/edit-vehicle/:id">
          <EditVehicle/>
        </Route>
      </Switch>
    </Router>
  );
}
 
export default App;