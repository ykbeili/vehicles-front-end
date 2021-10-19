import React, { useState, useEffect } from 'react';
import config from "../config.js"
import MaterialTable from 'material-table'
import styled from 'styled-components'

const url = config.EXPRESS_API_URL

const Button = styled.button`
width: 50%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
`

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

  const goToAddVehiclePage = () => {
    window.location.href = '/add-vehicle'
  }

   return (
    <div className="App">
      <header>
        <h1>Vehicles</h1>
      </header>
      <div>
        <Button onClick={goToAddVehiclePage}>Add New Vehicle</Button>
      </div>
      <div>
      <MaterialTable 
        title="Vehicles"
        data={vehicleList.length > 0 ? vehicleList : []}
        columns={[
          { title: 'Make', field: 'make' },
          { title: 'Year', field: 'year' },
          { title: 'Model', field: 'model' },
          { title: 'Price', field: 'price' },
          { title: 'Status', field: 'status' },
        ]}
        options={{
          search: true,
          paging: false,
          filtering: true,
          actionsColumnIndex: -1
        }}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Vehicles',
            onClick: (event, rowData) => {
              console.log(rowData._id, 'rowData')
            }
          },
        ]}
      />
      </div>
    </div>
  );
}