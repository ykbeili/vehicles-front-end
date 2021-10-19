import React from "react";
import "./App.css";
import VehicleList from "./vehicles/VehicleList"
import AddVehicle from "./vehicles/AddVehicle"
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
      </Switch>
    </Router>
  );
}
 
export default App;