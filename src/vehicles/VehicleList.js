import React, { useState, useEffect } from 'react';
import config from "../config.js"
import MaterialTable from 'material-table'
const url = config.EXPRESS_API_URL

export default function VehicleList() {
  const [vehicleList, setVehicleList] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('boba')
    fetchVehicles()
  }, []);

  const fetchVehicles = () => {
    fetch(url + "vehicles", { 
      method: 'get', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      }, })
    .then(response => { 
      if (!response.ok) {
        throw response
      } else {
        return response.json()
      }
    })
    .then(response => {
      setVehicleList(response.data)
      console.log(response.data, 'response.data')
    })
    .catch(err => err)
  }
  return (
    <div className="App">
      <header>
        <h1>Vehicles</h1>
      </header>
      <div>
      <MaterialTable 
        title="Vehicles"
        data={vehicleList.length > 0 ? vehicleList : []}
        columns={[
          { title: 'No', field: '_id' },
          { title: 'Make', field: 'make' },
          { title: 'Year', field: 'year' },
          { title: 'Model', field: 'model' },
          { title: 'Price', field: 'price' },
          { title: 'Status', field: 'status' },
        ]}
      />
      </div>
    </div>
  );
}