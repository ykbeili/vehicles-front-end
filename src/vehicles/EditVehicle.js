import React, { useState, useEffect } from 'react';
import config from "../config.js"
import styled from 'styled-components'
const url = config.EXPRESS_API_URL

const Button = styled.button`
width: 100%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
`
const Input = styled.input `
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
const Div = styled.div`
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
`
export default function AddVehicle() {
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const addVehicle = () => {
    const data = {
      make: make,
      year: year,
      model: model,
      price: price,
      status: status
    }
    fetch(url + `vehicles`, { 
      method: 'post', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => { 
      if (!response.ok) {
        throw response
      } else {
        return response.json()
      }
    })
    .then(response => {
      window.location.href = '/' 
    })
    .catch(err => err)
  }
  const goToVehiclesPage = () => {
    window.location.href = '/'
  }
  return (
    <Div>
      <div>
        <label>Make</label>
        <Input 
          type="text"
          value={make}
          onChange={(e) => setMake(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Year</label>
        <Input 
          type="text"
          value={year}
          onChange={(e) => setYear(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Model</label>
          <Input 
            type="text"
            value={model}
            onChange={(e) => setModel(e.currentTarget.value)}
          />
      </div>
      <div>
        <label>Price</label>
        <Input 
          type="text"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Status</label>
          <Input 
            type="text"
            value={status}
            onChange={(e) => setStatus(e.currentTarget.value)}
          />
      </div>
      <div>
      <Button onClick={addVehicle}>Add Vehicle</Button>

      </div>
      <br/>
      <div>
      <Button onClick={goToVehiclesPage}>Go To Vehicles Page</Button>
      </div>
    </Div>
  );
}